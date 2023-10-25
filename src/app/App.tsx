import { Header } from 'widgets/Header';
import { AppRouter } from './providers/AppRouter';
import { Container } from '@mantine/core';

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export { App };
