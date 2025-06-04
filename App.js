import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import { SHeader } from './styles/SHeader';
import { FontProvider, useFontContext } from './FontProvider';
import { UserProvider } from './UserContext'; // ✅ Included from second file

// Import Screens
import Login from './screens/Login';
import Newsfeed from './screens/Newsfeed';
import Reviews from './screens/Reviews';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import QRScanner from './screens/QRScanner';
import EditProfile from './screens/EditProfile';
import WriteReview from './screens/WriteReview';

// Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function BottomTabNavigator() {
  const change = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icons = {
            Newsfeed: 'newspaper',
            Reviews: 'stars',
            Profile: 'person',
            Settings: 'settings',
          };
          return <MaterialIcons name={icons[route.name]} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Newsfeed"
        component={Newsfeed}
        options={{
          headerTitle: () => (
            <View style={SHeader.container}>
              <View style={[SHeader.left, { flex: 0 }]}>
                <Image source={require('./assets/logo-round.png')} style={SHeader.icon} />
              </View>
              <View style={[SHeader.center, { alignItems: 'flex-start' }]}>
                <Text style={SHeader.text}>THE SOIREE</Text>
              </View>
              <View style={SHeader.right}>
                <TouchableOpacity onPress={() => change.navigate("QRScanner")}>
                  <MaterialIcons name="qr-code-scanner" size={35} />
                </TouchableOpacity>
              </View>
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Tab.Screen name="Reviews" component={ReviewsStackNavigator} options={{ headerShown: false }} />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => (
            <View style={SHeader.container}>
              <View style={SHeader.left}>
                <Image source={require('./assets/logo-round.png')} style={SHeader.icon} />
              </View>
              <View style={SHeader.center}>
                <Text style={SHeader.text}>PROFILE</Text>
              </View>
              <View style={SHeader.right} />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />

      <Tab.Screen name="Settings" component={SettingsStackNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// Stack Navigator (Login + Tabs)
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="QRScanner" component={QRScanner} />
    </Stack.Navigator>
  );
}

// Reviews Navigator
function ReviewsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReviewsMain"
        component={Reviews}
        options={{
          headerTitle: () => (
            <View style={[SHeader.container, { height: 64 }]}>
              <View style={SHeader.left}>
                <Image source={require('./assets/logo-round.png')} style={SHeader.icon} />
              </View>
              <View>
                <Text style={SHeader.text}>REVIEWS</Text>
              </View>
              <View style={SHeader.right} />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="WriteReview"
        component={WriteReview}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View style={SHeader.container}>
              <View style={SHeader.left}>
                <Image source={require('./assets/logo-round.png')} style={SHeader.icon} />
              </View>
              <View style={SHeader.center}>
                <Text style={[SHeader.text, { marginLeft: -40 }]}>WRITE A REVIEW</Text>
              </View>
              <View style={{ width: 30 }} />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

// Settings Navigator
function SettingsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsMain"
        component={Settings}
        options={{
          headerTitle: () => (
            <View style={[SHeader.container, { height: 64 }]}>
              <View style={SHeader.left}>
                <Image source={require('./assets/logo-round.png')} style={SHeader.icon} />
              </View>
              <View style={SHeader.center}>
                <Text style={SHeader.text}>SETTINGS</Text>
              </View>
              <View style={SHeader.right} />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerBackVisible: false,
          headerTitle: () => (
            <View style={[SHeader.container, { height: 64 }]}>
              <View style={SHeader.left}>
                <Image source={require('./assets/logo-round.png')} style={SHeader.icon} />
              </View>
              <View style={SHeader.center}>
                <Text style={SHeader.text}>EDIT PROFILE</Text>
              </View>
              <View style={SHeader.right} />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

// Main App (with providers wrapped)
export default function App() {
  return (
    <UserProvider> {/* ✅ from second code */}
      <FontProvider>
        <AppContent />
      </FontProvider>
    </UserProvider>
  );
}

// Font Loading with Spinner
function AppContent() {
  const { fontsLoaded } = useFontContext();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
