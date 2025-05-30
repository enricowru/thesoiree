import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //create a tab navigator, which is then used to define the bottom tab navigation structure.
import Newsfeed from "../screens/Newsfeed";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Newsfeed") iconName = "home";
          else if (route.name === "Profile") iconName = "person";
          else if (route.name === "Settings") iconName = "settings";
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Newsfeed" component={Newsfeed} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
//Navigation Structure: The BottomTabNavigator component sets up a bottom tab navigation system with three tabs: Newsfeed, Profile, and Settings.
//Each tab has an associated icon from the Material Icons library, which changes color based on the tab's active or inactive state.
//The screenOptions function allows for customization of the tab bar's appearance and behavior, such as hiding the header and setting active/inactive icon colors.