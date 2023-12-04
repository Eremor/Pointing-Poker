import {
  createTheme,
  mergeMantineTheme,
  DEFAULT_THEME,
  Button,
} from '@mantine/core';

const themeOverride = createTheme({
  fontFamily: 'Roboto, sans-serif',
  focusRing: 'auto',
  defaultRadius: 'md',
  cursorType: 'pointer',
  components: {
    Button: Button.extend({
      styles(theme, props) {
        const colorScheme =
          localStorage.getItem('mantine-color-scheme-value') || 'light';
        if (props.variant === undefined) {
          return {
            label: {
              color: `${colorScheme === 'light' ? theme.white : theme.black}`,
              fontWeight: 500,
            },
          };
        }

        return {
          root: {},
          label: {
            fontWeight: 500,
          },
        };
      },
    }),
  },
});

export const mantineTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
