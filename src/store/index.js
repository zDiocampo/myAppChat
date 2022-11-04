import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import messagesReducer from './reducers/messagesReducer';

export const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
   }

const rootReducer = combineReducers({
   messagesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store)


export { store , persistor};
