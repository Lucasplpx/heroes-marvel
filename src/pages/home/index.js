import React from 'react';
import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AreaView } from '../../components/AreaView';
import { Header } from '../../components/Header';
import { useTheme } from '../../hooks/useTheme';

export const Home = () => {
  const { theme, isDarkMode } = useTheme();

  return (
    <AreaView theme={theme}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}
      >
        <Header>Header Lucas </Header>
      </View>
    </AreaView>
  );
};
