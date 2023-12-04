import { useMantineColorScheme, useMantineTheme } from '@mantine/core';

interface ThemeColorsProps {
  buttonColor: string;
  titleColor: string;
}

export const useThemeColors = (): ThemeColorsProps => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return {
    buttonColor:
      colorScheme === 'light' ? theme.colors.blue[6] : theme.colors.yellow[6],
    titleColor:
      colorScheme === 'light' ? theme.colors.blue[6] : theme.colors.yellow[6],
  };
};
