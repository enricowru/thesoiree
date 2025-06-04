import React, { useState, useContext } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, Image, Pressable, Alert, Linking 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SLogin } from '../styles/SLogin';
import { UserContext } from '../UserContext';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../screens/mobile_config';

export default function Login() {
  const navigation = useNavigation();
  const { setLoggedInUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setErrorMessage('');

    if (!username || !password) {
      setErrorMessage('Please enter username and password.');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        const rawText = await response.text();
        console.error('Non-JSON response:', rawText);
        Alert.alert('Server Error', 'Unexpected server response. Please try again later.');
        return;
      }

      if (response.ok) {
        setLoggedInUser(data.user);
        Alert.alert('Success', 'Login successful!', [
          { text: 'OK', onPress: () => navigation.replace('MainTabs') },
        ]);
      } else {
        setErrorMessage(data.message || 'Invalid username or password.');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      Alert.alert('Network Error', 'Could not connect to the server.');
    }
  };

  return (
    <View style={SLogin.container}>

      {/* TOP PART */}
      <View style={SLogin.top}>
        <Image source={require('../assets/company-logo.png')} style={SLogin.logo} />
      </View>

      {/* BOTTOM PART */}
      <View style={SLogin.bottom}>
        <View style={SLogin.bottomgrey}>

          {/* HEADER TEXT */}
          <View style={SLogin.bmaintext}>
            <Text style={SLogin.maintext}>THE SOIREE</Text>
            <Text style={{ fontFamily: 'inria', alignSelf: 'center', fontSize: 12 }}>
              BY NIKE'S CATERING SERVICES
            </Text>
          </View>

          {/* CREDENTIALS FORM */}
          <View style={SLogin.credentials}>
            <Text style={{ marginLeft: 15, fontFamily: 'jostsemi', fontSize: 16 }}>
              WELCOME BACK
            </Text>

            {/* USERNAME INPUT */}
            <View style={SLogin.credgroup}>
              <Image
                style={SLogin.credicon}
                source={require('../assets/icons/usericon.png')}
              />
              <TextInput
                style={[SLogin.credinput, { fontFamily: 'inria', width: '85%', fontSize: 16 }]}
                placeholder="Enter Username"
                maxLength={50}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* PASSWORD INPUT */}
            <View style={SLogin.credgroup}>
              <Image
                style={SLogin.credicon}
                source={require('../assets/icons/passwordicon.png')}
              />
              <TextInput
                style={[SLogin.credinput, { fontFamily: 'inria', flex: 1, fontSize: 16 }]}
                placeholder="Enter Password"
                maxLength={50}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{ padding: 10, height: '100%', justifyContent: 'center' }}
              >
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={22}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {/* ERROR MESSAGE */}
            {errorMessage ? (
              <Text style={SLogin.errortext}>{errorMessage}</Text>
            ) : null}

            {/* REMEMBER ME & FORGOT PASSWORD */}
            <View style={SLogin.lower}>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={() => setChecked(!checked)}>
                  <View
                    style={[
                      { backgroundColor: checked ? '#000' : '#fff' },
                      SLogin.checkbox,
                    ]}
                  >
                    {checked && <Text style={{ color: '#fff', fontSize: 10 }}>✔</Text>}
                  </View>
                </Pressable>

                <Text style={[SLogin.lowertext, { fontSize: 11, marginLeft: 5 }]}>
                  REMEMBER ME
                </Text>
              </View>

              <View>
                <Text
                  style={[SLogin.lowertext, { fontSize: 11, textDecorationLine: 'underline' }]}
                  onPress={() => Linking.openURL('https://www.facebook.com/ysmndomingo')}
                >
                  FORGOT PASSWORD?
                </Text>
              </View>

            </View>
          </View>

          {/* LOGIN BUTTON */}
          <TouchableOpacity style={SLogin.button} onPress={handleLogin}>
            <Text style={SLogin.btext}>LOGIN</Text>
          </TouchableOpacity>

          {/* SIGN-UP LINK */}
          <Text style={[SLogin.lowertext, { alignSelf: 'center', fontSize: 10, margin: 2 }]}>
            DON'T HAVE AN ACCOUNT? CREATE ONE
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://www.facebook.com/ysmndomingo')}
            >
              {' '}HERE
            </Text>.
          </Text>

        </View>
      </View>
    </View>
  );
}
