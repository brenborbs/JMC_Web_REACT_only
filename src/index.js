import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Resources/css/main.css';
import ScrollToTop from './Common/ScrollToTop';

import App from './App';


ReactDOM.render(

<BrowserRouter>
      <ScrollToTop>
            <App />
      </ScrollToTop>
</BrowserRouter>


, document.getElementById('root'));


// serviceWorker.unregister();
