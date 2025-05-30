import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, Platform, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SEditProfile } from '../styles/SEditProfile';
import EditProfileInputs from '../tocall/EditProfileInputs';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../UserContext';

export default function EditProfile() {
    const navigation = useNavigation();
    const { loggedInUser, setLoggedInUser, updateProfileImage, setProfileFilter, revertToPreviousImage, filters } = useUser();
    const [isSaving, setIsSaving] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    
    // Initialize form data from loggedInUser
    const [formData, setFormData] = useState({
        firstName: loggedInUser?.firstName || "",
        lastName: loggedInUser?.lastName || "",
        username: loggedInUser?.username || "",
        email: loggedInUser?.email || "",
        phone: loggedInUser?.phone || "",
        password: loggedInUser?.password || ""
    });

    // Initialize profile image from loggedInUser
    const [profileImage, setProfileImage] = useState(loggedInUser?.profileImage || require('../postimages/pfp.jpg'));

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    ToastAndroid.show('Sorry, we need camera roll permissions to make this work!', ToastAndroid.SHORT);
                }
            }
        })();
    }, []);

    // Check for changes in form data
    useEffect(() => {
        const hasFormChanges = Object.keys(formData).some(key => formData[key] !== loggedInUser[key]);
        const hasImageChanges = profileImage !== loggedInUser.profileImage;
        setHasChanges(hasFormChanges || hasImageChanges);
    }, [formData, profileImage]);

    const validateForm = () => {
        if (!formData.firstName.trim()) {
            ToastAndroid.show('Please enter your first name', ToastAndroid.SHORT);
            return false;
        }
        if (!formData.lastName.trim()) {
            ToastAndroid.show('Please enter your last name', ToastAndroid.SHORT);
            return false;
        }
        if (!formData.username.trim()) {
            ToastAndroid.show('Please enter a username', ToastAndroid.SHORT);
            return false;
        }
        if (!formData.email.trim()) {
            ToastAndroid.show('Please enter your email', ToastAndroid.SHORT);
            return false;
        }
        if (!formData.phone.trim()) {
            ToastAndroid.show('Please enter your phone number', ToastAndroid.SHORT);
            return false;
        }
        if (!formData.password.trim()) {
            ToastAndroid.show('Please enter a password', ToastAndroid.SHORT);
            return false;
        }
        if (formData.password.length < 6) {
            ToastAndroid.show('Password must be at least 6 characters', ToastAndroid.SHORT);
            return false;
        }
        return true;
    };

    const handleInputChange = (key, value) => {
        setFormData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const handleSave = async () => {
        if (!validateForm()) return;
        
        setIsSaving(true);
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Update the user context with new data
            setLoggedInUser({
                ...loggedInUser,
                ...formData,
                profileImage: profileImage
            });
            
            // Show success message and navigate back
            ToastAndroid.show('Profile updated successfully!', ToastAndroid.LONG);
            setTimeout(() => {
                navigation.goBack();
            }, 500); // Small delay to ensure the toast is visible
        } catch (error) {
            ToastAndroid.show('Error saving changes. Please try again.', ToastAndroid.LONG);
        } finally {
            setIsSaving(false);
        }
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled && result.assets && result.assets[0]) {
                const newImage = { uri: result.assets[0].uri };
                setProfileImage(newImage);
                updateProfileImage(newImage);
                setHasChanges(true);
            }
        } catch (error) {
            ToastAndroid.show('Error selecting image', ToastAndroid.SHORT);
            console.log('Error selecting image:', error);
        }
    };

    const handleFilterChange = (filterName) => {
        setProfileFilter(filterName);
        setHasChanges(true);
    };

    const handleRevertImage = () => {
        revertToPreviousImage();
        setProfileImage(loggedInUser.profileImage);
        setHasChanges(true);
    };

    return (
        <ScrollView>
            <View style={SEditProfile.container}>
                <Image 
                    source={typeof profileImage === 'number' ? profileImage : { uri: profileImage.uri }}
                    style={[
                        SEditProfile.pfp,
                        { filter: filters[loggedInUser.profileFilter] !== 'none' ? filters[loggedInUser.profileFilter] : undefined }
                    ]}
                />

                <View style={SEditProfile.imageControls}>
                    <TouchableOpacity style={SEditProfile.editButton} onPress={selectImage}>
                        <Text style={SEditProfile.buttonText}>Change Picture</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[SEditProfile.editButton, loggedInUser.recentProfileImages.length === 0 && SEditProfile.disabledButton]} 
                        onPress={handleRevertImage}
                        disabled={loggedInUser.recentProfileImages.length === 0}
                    >
                        <Text style={SEditProfile.buttonText}>Revert to Previous</Text>
                    </TouchableOpacity>
                </View>

                <View style={SEditProfile.filterContainer}>
                    <Text style={SEditProfile.filterTitle}>Filters:</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {Object.keys(filters).map((filterName) => (
                            <TouchableOpacity
                                key={filterName}
                                style={[
                                    SEditProfile.filterButton,
                                    loggedInUser.profileFilter === filterName && SEditProfile.activeFilter
                                ]}
                                onPress={() => handleFilterChange(filterName)}
                            >
                                <Text style={[
                                    SEditProfile.filterText,
                                    loggedInUser.profileFilter === filterName && SEditProfile.activeFilterText
                                ]}>
                                    {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {loggedInUser.recentProfileImages.length > 0 && (
                    <View style={SEditProfile.recentImagesContainer}>
                        <Text style={SEditProfile.recentTitle}>Recent Pictures:</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {loggedInUser.recentProfileImages.map((img, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        setProfileImage(img);
                                        updateProfileImage(img);
                                    }}
                                >
                                    <Image
                                        source={typeof img === 'number' ? img : { uri: img.uri }}
                                        style={SEditProfile.recentImage}
                                    />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}

                <View>
                    <EditProfileInputs
                        inputtitle="First Name"
                        inputvalue={formData.firstName}
                        onChangeText={(text) => handleInputChange("firstName", text)}
                    />

                    <EditProfileInputs
                        inputtitle="Last Name"
                        inputvalue={formData.lastName}
                        onChangeText={(text) => handleInputChange("lastName", text)}
                    />

                    <EditProfileInputs
                        inputtitle="Username"
                        inputvalue={formData.username}
                        onChangeText={(text) => handleInputChange("username", text)}
                    />

                    <EditProfileInputs
                        inputtitle="Email"
                        inputvalue={formData.email}
                        onChangeText={(text) => handleInputChange("email", text)}
                    />

                    <EditProfileInputs
                        inputtitle="Phone No."
                        inputvalue={formData.phone}
                        onChangeText={(text) => handleInputChange("phone", text)}
                    />

                    <EditProfileInputs
                        inputtitle="Password"
                        inputvalue={formData.password}
                        onChangeText={(text) => handleInputChange("password", text)}
                        secureTextEntry={true} 
                    />
                </View>

                <TouchableOpacity 
                    style={[
                        SEditProfile.savebutton,
                        (!hasChanges || isSaving) && SEditProfile.disabledButton
                    ]} 
                    onPress={handleSave}
                    disabled={!hasChanges || isSaving}
                >
                    {isSaving ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={SEditProfile.savetext}>
                            {hasChanges ? 'Save Changes' : 'No Changes'}
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
