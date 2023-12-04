import { Header } from 'widgets/Header';
import { AppRouter } from './providers/AppRouter';
import { Container } from '@mantine/core';
import { Suspense } from 'react';

const App = () => {
  return (
    <div>
      <Suspense fallback="loading...">
        <Header />
        <Container
          fluid
          styles={{
            root: {
              display: 'flex',
              justifyContent: 'center',
            },
          }}
        >
          <AppRouter />
        </Container>
      </Suspense>
    </div>
  );
};

export { App };
