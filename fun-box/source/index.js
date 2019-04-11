import 'normalize.css'
import './assets/css/fonts.sass';
import './assets/css/index.sass';

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/index'

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
