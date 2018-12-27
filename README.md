# Mentoring program React JS

## 4th Testing

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

Under development
