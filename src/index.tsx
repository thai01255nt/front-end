import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistedStore, store } from './stores';
import { PersistGate } from 'redux-persist/integration/react';
import { api } from './helpers';
import { AxiosResponse } from 'axios';
import { logout } from './stores/account/actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore} >
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const {dispatch} = store
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error): Promise<AxiosResponse> {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const {status} = error.response;
  if (status === 403) {
    dispatch(logout());
  }
  return Promise.reject(error.response);
});

reportWebVitals();
