import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <h1>Hello World!</h1>
  </StrictMode>
)

