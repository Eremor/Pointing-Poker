import { createTheme, mergeMantineTheme, DEFAULT_THEME } from '@mantine/core';

const themeOverride = createTheme({
  fontFamily: 'Roboto, sans-serif',
  focusRing: 'auto',
  defaultRadius: 'md',
  cursorType: 'pointer',
});

export const mantineTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
