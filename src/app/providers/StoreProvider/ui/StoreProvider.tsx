import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const navigate = useNavigate();

  const store = createReduxStore(initialState, navigate);

  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
