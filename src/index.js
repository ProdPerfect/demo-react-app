import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const prodPerfectConfig = {
    host: '<PROD PERFECT HOST URL>'
    libraryUrl: '<keen-tracking.min.js LIBRARY URL>',
    projectId: '<YOUR PROJECT ID>',
    writeKey: '<YOUR WRITE KEY>',
};

(function(e){var n,r="ProdPerfectKeen",o=!!window.Keen&&window.Keen;window[r]=window[r]||{ready:function(t){var a,d=document.getElementsByTagName("head")[0],i=document.createElement("script"),c=window;i.onload=i.onreadystatechange=function(){if(!(i.readyState&&!/^c|loade/.test(i.readyState)||a)){if(i.onload=i.onreadystatechange=null,a=1,n=c.Keen,o)c.Keen=o;else try{delete c.Keen}catch(e){c.Keen=void 0}c[r]=n,c[r].ready(t)}},i.async=1,i.src=e.libraryUrl,d.parentNode.insertBefore(i,d)}},window[r].ready(function(){e.requestType="beacon";var n=new window.ProdPerfectKeen(e);n.extendEvents({visitor:{user_id:null}});n.initAutoTracking({ignoreDisabledFormFields:!1,recordClicks:!0,recordFormSubmits:!0,recordInputChanges:!0,recordPageViews:!0,recordPageUnloads:!0,recordScrollState:!0})})})(prodPerfectConfig); // eslint-disable-line

