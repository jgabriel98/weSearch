import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './fonts/merriweather/Merriweather-Regular.ttf';
import './fonts/merriweather/Merriweather-Bold.ttf';
import './fonts/merriweather/Merriweather-Italic.ttf';
import './fonts/merriweather/Merriweather-Light.ttf';
import './fonts/merriweather/Merriweather-BoldItalic.ttf';
import './fonts/merriweather/Merriweather-LightItalic.ttf';

import './fonts/sourceSansPro/SourceSansPro-Italic.ttf';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
