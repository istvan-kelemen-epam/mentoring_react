# Mentoring program React JS

## 7th Server Side Rendering

### Install

```bash
$ git clone https://github.com/istvan-kelemen-epam/mentoring_react.git
$ cd mentoring_react
$ git checkout 7_server-side-rendering
$ npm install -g webpack webpack-cli # if not installed on the machine yet
$ npm install -g babel-core babel-cli # if not installed on the machine yet
$ npm install -g html-webpack-plugin # if not installed on the machine yet
$ npm install
```

### Compile

```bash
npm run build
```

### Run the dev-server

```bash
$ npm run start # developer mode
$ npm run prod # production mode
```

...and then paste the http://localhost:8080/ URI to the browser's location bar

### Test was not required

There is no test

### Notes

Code splitting requirement is implemented in the `webpack/webpack.config.common.js` based on https://webpack.js.org/guides/code-splitting/#prevent-duplication
