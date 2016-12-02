
## Table of Contents
- [Install the Learning Record Store Dashboard](#installation)
- [Running a development server](#development)
- [Running tests](#testing)
- [Deploying](#deploying)
- [Stack](#stack)

## Installation
The learning record store dashboard requires a couple of dependencies to run:

- Node.js v6.9.1 which can be installed with [NVM](https://github.com/creationix/nvm#installation)
- [Yarn](https://yarnpkg.com/en/docs/install)

After installing the required packages you need to install the required
dependencies by running `script/bootstrap` in the root directory of the project.

If you use NVM it will download and use the required Node.JS version and install
the required dependencies.

## Updating
Updating the application is as easy as running `script/update` which will update
the required dependencies.

## Development
When developing the application can be started by running `script/server`. This
will start a development server running on `http://localhost:3000`.

## Testing
To continuously run the unit tests you can run `script/test`.

## Deploying
Deployment is done by CircleCI when a branch is merged to master. The application
is currently deployed using [Surge](https://surge.sh) by running `script/deploy`.

## Stack
The application uses the following dependencies as it's core stack:
 - [React](https://facebook.github.io/react/) to manage views
 - [Redux](https://github.com/reactjs/redux) to manage state with [React Redux](https://github.com/reactjs/react-redux) and [Redux Actions](https://github.com/acdlite/redux-actions)
 - [Redux Saga](https://github.com/yelouafi/redux-saga) for managing async calls to the API
 - [Reselect](https://github.com/reactjs/reselect) for composition and memoization of state selectors
 - [React Router](https://github.com/ReactTraining/react-router) to manage routing with [React Router Redux](https://github.com/reactjs/react-router-redux) to sync routing with the application state
 - [CSS Modules](https://github.com/css-modules/css-modules) to create modules for CSS and avoid global scope
 - [Ramda](http://ramdajs.com/) as a functional utility library
 - [Jest](https://facebook.github.io/jest/) for unit testing

The development stack is parsed through [Webpack](https://webpack.github.io/) and
uses the [React Hot Loader](https://github.com/gaearon/react-hot-loader/pull/240)
to speed up the development cycle.
