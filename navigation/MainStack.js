  import React from "react"; 
  import { createNativeStackNavigator } from "@react-navigation/native-stack"; //This navigator allows for transitioning between screens where each new screen is placed on top of a stack ur welcome
  import Login from "../screens/Login";
  import QRScanner from "../screens/QRScanner";
  import BottomTabNavigator from "./BottomTabNavigator";

  const Stack = createNativeStackNavigator();

  export default function MainStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
      </Stack.Navigator>
    );
  }
