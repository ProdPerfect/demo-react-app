import React, { Component } from 'react';

import './Words.css'

// A class for the main content of our single github page.

class Words extends Component {
  render() {
    const styleOverride = {
        'fontSize': '0.8em'
    };

    return (
<div className="main">
    <h1>React Demo App</h1>

    <div className="main_content">
        <p>We created this repo (and this page) to demonstrate how to add the ProdPerfect tracking
        snippet to your existing React app. The source code for this app,
        including the tracking code,
        <a href="https://github.com/ProdPerfect/demo-react-app">can be found on GitHub</a></p>

        <h2>Integrating the ProdPerfect Tracker</h2>

        <ol>
            <li>Add <a href="#snippet-code">the snippet</a> (see below) to the same file where you call
<pre><code className="language-javascript" style={styleOverride}>{`ReactDOM.render(<App />, ...)`}</code></pre>
            </li>

            <li>Configure the snippet with your custom values</li>
            <li>and you're ready to go!</li>
        </ol>


<div>In the case of this demo, the tracking snippet has been added to the<div className="inline-code">src/index.js</div>file.</div>

<h2 id="snippet-code">ProdPerfect Tracking-Snippet Code</h2>
<pre>
<code className="language-javascript" style={styleOverride}>
{`const prodPerfectConfig = {
    host: '<YOUR_PRODPERFECT_URL>',
    libraryUrl: '<URL_TO_TRACKING_JS_LIB>',
    projectId: '<YOUR_PROJECT_ID>',
    writeKey: '<YOUR_WRITEKEY>'
};

(function(e){var n,r="ProdPerfectKeen",o=!!window.Keen&&window.Keen;
window[r]=window[r]||{ready:function(t){var a,d=document.getElementsByTagName("head")[0],
i=document.createElement("script"),c=window;i.onload=i.onreadystatechange=function(){
if(!(i.readyState&&!/^c|loade/.test(i.readyState)||a)){
if(i.onload=i.onreadystatechange=null,a=1,n=c.Keen,o)c.Keen=o;else try{delete c.Keen}
catch(e){c.Keen=void 0}c[r]=n,c[r].ready(t)}},i.async=1,i.src=e.libraryUrl,
d.parentNode.insertBefore(i,d)}},window[r].ready(function(){e.requestType="beacon";
var n=new window.ProdPerfectKeen(e);n.extendEvents({visitor:{user_id:null}});n.initAutoTracking({
ignoreDisabledFormFields:!1,recordClicks:!0,recordFormSubmits:!0,recordInputChanges:!0,
recordPageViews:!0,recordPageUnloads:!0,recordScrollState:!0})})})(prodPerfectConfig);`}
</code>
</pre>

<h2>Verifying tracking snippet activity</h2>
<div>You can check that the page is indeed sending data back the the ProdPerfect servers
by opening your browser's developer tools, going to the "network" section and confirming that
whenever you click anywhere on the actual page a network request is made.  The request URL should end with
<div className="inline-code">...clicks?api_key=...</div>.
The tracking snippet is running on this page, so you can check it right now!</div>

<h2>Running the demo locally</h2>

<ol className="run-locally-instructions">
    <li>Modify the<div className="inline-code">prodPerfectConfig</div>object
        in that the<div className="inline-code">src/index.js</div>file with your host,
        library URL, project ID and write key values.</li>
    <li>Run<div className="inline-code">npm start</div>
        in your terminal</li>
    <li>navigate to <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> with your browser</li>
</ol>
        </div>
      </div>
    );
  }
}

export default Words;
