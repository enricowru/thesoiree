import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

const FontContext = createContext();

export function FontProvider({ children }) {
  const [fontsLoaded] = useFonts({
    'inria': require('./assets/fonts/inria-serif.bold.ttf'),
    'jostblack': require('./assets/fonts/jost.black.ttf'),
    'jostbold': require('./assets/fonts/jost.bold.ttf'),
    'jostbook': require('./assets/fonts/jost.book.ttf'),
    'jostmedium': require('./assets/fonts/jost.medium.ttf'),
    'jostsemi': require('./assets/fonts/jost.semi.ttf'),
    'jostitalic': require('./assets/fonts/jost.book-italic.ttf'),
    'jostlight': require('./assets/fonts/jost.light.ttf'),
  });

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFontContext() {
  return useContext(FontContext);
}
