import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* import ReactGA from 'react-ga'; */
//ReactGA.initialize('');
/* ReactGA.pageview(window.location.pathname + window.location.search); */
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-MJR9QHL'
}
TagManager.initialize(tagManagerArgs)
console.disableYellowBox = true

ReactDOM.render(<App />, document.getElementById('root'));
