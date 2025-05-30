import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './UserContext';
import { FontProvider } from './FontProvider';
import MainStack from './navigation/MainStack';

export default function App() {
  return (
    <UserProvider>
      <FontProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </FontProvider>
    </UserProvider>
  );
}
