import { Header } from 'widgets/Header';
import { AppRouter } from './providers/AppRouter';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: 50 }}>
        <AppRouter />
      </div>
    </div>
  );
};

export { App };
