# Mentoring program React JS

## 5th Redux

### Install

```bash
$ git clone https://github.com/istvan-kelemen-epam/mentoring_react.git
$ cd mentoring_react
$ git checkout 5_redux
$ npm install -g webpack webpack-cli # if not installed on the machine yet
$ npm install -g babel-core babel-cli # if not installed on the machine yet
$ npm install -g html-webpack-plugin # if not installed on the machine yet
$ npm install
```

### Compile

```bash
webpack
```

### Run the dev-server

```bash
$ webpack-dev-server
```

...and then paste the http://localhost:8080/ URI to the browser's location bar

### Test

```bash
npm test
```

All the statements, branches, functions and lines must be **100%** covered

### Update snapshots

```bash
$ npm test -- -u
```

### Coverage

```bash
$ npm test -- --coverage
```

...and then look at `coverage/lcov-report/index.html` in browser

### Notes

Contradicting to the specification where is stated that no limit is needed (in order to skip implementing pagination) I **applied a maximum 60 items limit because for example in case when the search expression is only "a", then 2027 items are provided**
