import React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import QRScanner from "../screens/QRScanner";
import BottomTabNavigator from "./BottomTabNavigator";
import ReviewsScreen from "../screens/ReviewsScreen"; // ✅ Added import

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="QRScanner" component={QRScanner} />
      <Stack.Screen name="Reviews" component={ReviewsScreen} /> {/* ✅ Added screen */}
    </Stack.Navigator>
  );
}
