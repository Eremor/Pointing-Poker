import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, MantineColorScheme } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

import { mantineTheme } from 'app/config/mantine/theme';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

const defaultSystemTheme = window.matchMedia('(prefers-color-scheme: light)')
  .matches
  ? 'light'
  : 'dark';

const defaultColorTheme = (window.localStorage.getItem(
  'mantine-color-scheme-value'
) || defaultSystemTheme) as MantineColorScheme;

root.render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={mantineTheme}
        defaultColorScheme={defaultColorTheme}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
