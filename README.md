# Mentoring program React JS

## 2nd task - webpack

### Install

```bash
$ git clone https://github.com/istvan-kelemen-epam/mentoring_react.git
$ cd mentoring_react
$ git checkout 2_webpack
$ npm install -g webpack webpack-cli # if not installed on the machine yet
$ npm install -g babel-core babel-cli # if not installed on the machine yet
$ npm install -g html-webpack-plugin # if not installed on the machine yet
$ npm install
```

### Compile

```bash
webpack --env.BUILD=dev # or =prod
```

### Run the test

```bash
$ npm test
```

### Run the dev-server

```bash
$ webpack-dev-server --env.BUILD=dev
```

...and then paste the http://localhost:8080/ URI to the browser's location bar
