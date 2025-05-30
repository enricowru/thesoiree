import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SLogin } from '../styles/SLogin';
import { UserContext } from "../UserContext";

const Login = () => {
  const navigation = useNavigation();
  const { setLoggedInUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log("Attempting login...");

      const response = await fetch("http://192.168.1.10:3000/login", { // Dito niyo lagay yung ip if mag E2E test kayo outside the current device apply it on all js.script containing ip address gets?
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log("Response received:", data);

      if (response.ok) {
        setLoggedInUser(data.user);
        Alert.alert("Success", "Login successful!");
        navigation.navigate("MainTabs");
      } else {
        Alert.alert("Login Failed", data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      Alert.alert("Error", "Could not connect to the server.");
    }
  };

  return (
    <View style={SLogin.container}>
      <View style={SLogin.icon}>
        <MaterialIcons name="person-pin" size={100} color="#888" />
      </View>

      <Text style={SLogin.title}>LOGIN</Text>

      <View style={SLogin.form}>
        <TextInput
          style={SLogin.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={SLogin.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={SLogin.button} onPress={handleLogin}>
          <Text style={SLogin.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={SLogin.footer}>Welcome to The Soiree</Text>
    </View>
  );
};

export default Login;
