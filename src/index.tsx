import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

import { mantineTheme } from 'app/config/mantine/theme';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <MantineProvider
        theme={mantineTheme}
        defaultColorScheme={'auto'}
      >
        <StrictMode>
          <App />
        </StrictMode>
      </MantineProvider>
    </StoreProvider>
  </BrowserRouter>
);
