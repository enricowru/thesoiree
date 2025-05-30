import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Animated } from 'react-native';
import { SSettings } from '../styles/SSettings';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
    const change = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const scaleAnim = useRef(new Animated.Value(0)).current;

    const handleLogout = () => {
        change.navigate('Login');
    };

    const handleEditProfile = () => {
        change.navigate('EditProfile');
    };

    // Modal Animation/Open
    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setModalVisible(true);

        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            speed: 12,
            bounciness: 8,
        }).start();
    };

    // Modal Animation/Close
    const closeModal = () => {
        Animated.timing(scaleAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => setModalVisible(false));
    };

    return (
        <View style={SSettings.container}>

            <TouchableOpacity style={SSettings.buttons} onPress={handleEditProfile}>
                <Text style={SSettings.text}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={SSettings.buttons} 
                onPress={() => openModal('About Us', 'We are a company dedicated to providing excellent services...')}>
                <Text style={SSettings.text}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={SSettings.buttons} 
                onPress={() => openModal('Data Privacy', 'We value your privacy. Your data will never be shared without your consent.')}>
                <Text style={SSettings.text}>Data Privacy</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={SSettings.buttons} 
                onPress={() => openModal('Terms and Conditions', 'By using our app, you agree to abide by our terms and conditions...')}>
                <Text style={SSettings.text}>Terms</Text>
            </TouchableOpacity>

            <TouchableOpacity style={SSettings.buttons} onPress={handleLogout}>
                <Text style={SSettings.text}>Log Out</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal visible={modalVisible} transparent animationType="none">
                <View style={SSettings.modalContainer}>

                    <Animated.View style={[SSettings.modalContent, { transform: [{ scale: scaleAnim }] }]}>

                        <Text style={SSettings.modalTitle}>{modalTitle}</Text>

                        <Text style={SSettings.modalText}>{modalContent}</Text>

                        <TouchableOpacity style={SSettings.okButton} onPress={closeModal}>
                            <Text style={SSettings.okButtonText}>OK</Text>
                        </TouchableOpacity>
                        
                    </Animated.View>

                </View>
            </Modal>
        </View>
    );
}
