import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

// Reactotron
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

// Middleware do saga
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// Array de middlewares
const middlewares = [sagaMiddleware, thunk];

// Criacao store passando reducers e os middlewares do saga e thunk
const store = createStore(persistReducers(rootReducer), middlewares);

// Criacao persistors
const persistor = persistStore(store);

// Iniciando os sagas
sagaMiddleware.run(rootSaga);

export { store, persistor };
