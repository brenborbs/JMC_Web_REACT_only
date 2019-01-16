import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './Resources/css/main.css';
import ScrollToTop from './Common/ScrollToTop';
// import { configureStore } from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

// const store = configureStore();

const rootEl = document.getElementById('root');

let render = () => {
      ReactDOM.render(
        // <Provider store={store} >
        <BrowserRouter>
        <ScrollToTop>
          <App />
      </ScrollToTop>
        </BrowserRouter>
        // </Provider>
        ,
        rootEl
      );
    };
    
    if (module.hot) {
      module.hot.accept('./App', () =>{
        setTimeout(render);
      })
    }
    
    render();


// ReactDOM.render(
// <BrowserRouter>
//       <ScrollToTop>
//             <App />
//       </ScrollToTop>
// </BrowserRouter>
// , document.getElementById('root'));
// serviceWorker.unregister();
