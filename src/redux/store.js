import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer  from './contacts/contacts-reducer'
import registerReducer from './auth/register-reducer'
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const authPersistCongig = {
    key: 'token',
    storage,
    whitelist: ['token']
};

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];


const store = configureStore({
   reducer: {
       contacts: contactsReducer,
       auth: persistReducer(authPersistCongig, registerReducer),
   }, 
   middleware,
   devTools: process.env.NODE_ENV ==='development'
});
    
const persistor= persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};
