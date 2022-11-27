import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';
import { fetchOfferAction, checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-center" />
      <App/>
    </Provider>
  </React.StrictMode>
);
