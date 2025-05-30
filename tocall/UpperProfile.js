import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SProfile } from '../styles/SProfile';
import { useUser } from '../UserContext';

const UpperProfile = () => {
    const { loggedInUser } = useUser();

    return(
        <View style={SProfile.container}>
            <Image 
                source={loggedInUser.profileImage} 
                style={SProfile.pfp}
            />

            <Text style={SProfile.username}>{loggedInUser.username.toUpperCase()}</Text>

            <View style={SProfile.lower}>
                <MaterialIcons 
                    name={"favorite-border"} 
                    size={24} 
                    color={"black"} 
                    style={SProfile.lowericon}
                />
                <Text style={SProfile.lowertext}>Liked Posts</Text>
            </View>
        </View>
    );
};

export default UpperProfile;