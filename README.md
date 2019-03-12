# ProdPerfect React Demo App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We created this repo to demonstrate how to add the ProdPerfect tracking snippet to your existing React app.  The process is extremely simple: add the snippet we provide to you to the "root" file where `ReactDOM.render(<App />, ...)` is called), configure with your custom values, and you're ready to go!

In the case of this demo, the tracking snippet has been added to the `src/index.js` file.  To use this app, modify the `prodPerfectConfig` object in that same file with the host, library URL, project ID and write key values that have been provided.

## Verify tracking snippet activity

Once the app is running and the page is visible in your browser (see "Getting Started - Available scripts" below for more information), open up your browser developer tools.  In the network section, you should see a network request being made every time you click on the visible page. The url will look something like `clicks?api_key=...`.  This indicates that the tracking snippet is active and attempting to send tracking data to our servers.

## Getting Started - Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

