import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import persistedReducer from './persistReducers';

const store = createStore(persistedReducer(rootReducer));
const persistor = persistStore(store);

export { store, persistor};