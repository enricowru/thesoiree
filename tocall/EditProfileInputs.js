import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SEditProfile } from '../styles/SEditProfile';

export default function EditProfileInputs({ inputtitle, inputvalue, onChangeText, secureTextEntry = false }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={[SEditProfile.lower, inputtitle === "First Name" && SEditProfile.firstInput]}>

            <Text style={SEditProfile.inputtitle}>{inputtitle}</Text>
            
           
            <View style={SEditProfile.inputContainer}>
                <TextInput
                    style={SEditProfile.inputvalue}
                    value={inputvalue}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                />

                {inputtitle === "Password" && (
                    <TouchableOpacity
                    style={SEditProfile.eyeButton}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <MaterialIcons 
                            name={isPasswordVisible ? "visibility" : "visibility-off"} 
                            size={24} 
                            color="gray" 
                        />
                    </TouchableOpacity>
                )}
            </View>
            
        </View>
    );
}
