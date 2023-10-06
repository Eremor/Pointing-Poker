import type { Preview } from '@storybook/react';
import i18n from './i18next';
import 'app/styles/index.scss';

const preview: Preview = {
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      ru: 'Russian'
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n
  },
};

export default preview;
