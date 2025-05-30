import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useUser } from '../UserContext';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { SWriteReview } from '../styles/SWriteReview';

export default function WriteReview({ navigation }) {
    const { setReviews, loggedInUser } = useUser();
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    'Permission Required',
                    'Sorry, we need camera roll permissions to upload images!'
                );
            }
        })();
    }, []);

    const pickImage = async () => {
        try {
            // Check permissions first
            const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                const { status: newStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (newStatus !== 'granted') {
                    Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to upload images!');
                    return;
                }
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsMultipleSelection: true,
                quality: 1,
                aspect: [4, 3],
            });

            if (!result.canceled && result.assets) {
                const newImages = result.assets.map(asset => asset.uri);
                setSelectedImages(prev => [...prev, ...newImages].slice(0, 3));
            }
        } catch (error) {
            console.error('Error picking image:', error);
            Alert.alert('Error', 'Failed to pick image. Please try again.');
        }
    };

    const handleSubmit = () => {
        if (feedback.trim() === '') {
            Alert.alert('Error', 'Please write your feedback');
            return;
        }

        if (rating === 0) {
            Alert.alert('Error', 'Please select a rating');
            return;
        }

        try {
            const newReview = {
                username: loggedInUser.username,
                feedback: feedback.trim(),
                fpictures: selectedImages.length > 0 ? selectedImages : [],
                userpic: loggedInUser.profileImage,
                date: new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }),
                rating: rating
            };

            console.log('Submitting new review:', newReview);
            setReviews(newReview);
            Alert.alert(
                'Success',
                'Your review has been submitted successfully!',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
        } catch (error) {
            console.error('Error submitting review:', error);
            Alert.alert('Error', 'Failed to submit review. Please try again.');
        }
    };

    return (
        <View style={SWriteReview.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={SWriteReview.content}>
                    <Text style={SWriteReview.sectionTitle}>
                        How was your overall experience?
                    </Text>

                    <View style={SWriteReview.starRating}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <TouchableOpacity
                                key={star}
                                onPress={() => setRating(star)}
                            >
                                <MaterialIcons
                                    name={star <= rating ? "star" : "star-outline"}
                                    size={40}
                                    color={star <= rating ? "#000" : "#666"}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={SWriteReview.sectionTitle}>
                        Add Photos
                    </Text>

                    <View style={SWriteReview.photoGrid}>
                        {[0, 1, 2].map((index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={pickImage}
                                style={SWriteReview.photoButton}
                            >
                                {selectedImages[index] ? (
                                    <View style={{ width: '100%', height: '100%' }}>
                                        <Image
                                            source={{ uri: selectedImages[index] }}
                                            style={SWriteReview.photoImage}
                                        />
                                        <TouchableOpacity
                                            style={SWriteReview.deleteButton}
                                            onPress={() => {
                                                const newImages = [...selectedImages];
                                                newImages.splice(index, 1);
                                                setSelectedImages(newImages);
                                            }}
                                        >
                                            <MaterialIcons name="close" size={16} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <MaterialIcons name="add" size={30} color="#999" />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={SWriteReview.sectionTitle}>
                        Write a Review
                    </Text>

                    <TextInput
                        style={SWriteReview.reviewInput}
                        placeholder="Your feedback helps us improve—share your review!"
                        multiline
                        value={feedback}
                        onChangeText={setFeedback}
                    />

                    <TouchableOpacity
                        style={[
                            SWriteReview.submitButton,
                            (!feedback.trim() || rating === 0) && SWriteReview.submitButtonDisabled
                        ]}
                        onPress={handleSubmit}
                        disabled={!feedback.trim() || rating === 0}
                    >
                        <Text style={SWriteReview.submitText}>
                            Submit Review
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
