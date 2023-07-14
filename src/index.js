import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';
ReactGA.initialize('GTM-MJR9QHL');
ReactGA.pageview(window.location.pathname + window.location.search);

console.disableYellowBox = true

ReactDOM.render(<App />, document.getElementById('root'));
