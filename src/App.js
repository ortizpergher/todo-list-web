import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { store, persistor } from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CssBaseline />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
