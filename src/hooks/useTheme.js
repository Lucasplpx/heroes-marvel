import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = {
    main: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return {
    theme,
    isDarkMode,
  };
};
