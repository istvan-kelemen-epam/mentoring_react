# Mentoring program React JS

## 8th Useful libraries

### Install

```bash
$ git clone https://github.com/istvan-kelemen-epam/mentoring_react.git
$ cd mentoring_react
$ git checkout 8_useful-libraries
$ npm install

$ yarn add -D flow-typed
$ yarn flow-typed install
```

### Compile

```bash
$ npm run build
```

### Utilities

```bash
$ npm run lint # to check eslint errors
$ npm run flow # to check the flow types
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

Airbnb eslint settings shown on the presentation and in the video applied* - the code cleaned (there were only some long line warning found).\
*prop-types rule was not applied, because it does not make sense in lots of files (not React files or React files with no props)
