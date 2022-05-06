// @ts-nocheck
import React from 'react';
import ReactDom from 'react-dom';
import App from './features/root/App';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'alertifyjs/build/css/alertify.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'animate.css/animate.min.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import 'animate.css';
import './index.css';

const container = document.getElementById('root');

ReactDom.render(
  <Provider store={store}>
    <SimpleReactLightbox>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SimpleReactLightbox>
  </Provider>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
