import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

import { mantineTheme } from 'app/config/mantine/theme';
import { App } from 'app/App';

import 'app/styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={mantineTheme}
        defaultColorScheme="auto"
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
