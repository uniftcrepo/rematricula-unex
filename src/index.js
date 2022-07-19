import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-2398475-47');
ReactGA.pageview(window.location.pathname + window.location.search);

console.disableYellowBox = true

ReactDOM.render(<App />, document.getElementById('root'));
