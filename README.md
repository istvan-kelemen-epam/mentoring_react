# Mentoring program React JS

## 6th Router

### Install

```bash
$ git clone https://github.com/istvan-kelemen-epam/mentoring_react.git
$ cd mentoring_react
$ git checkout 6_router
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

### Test was not required

But none of them fails.

### Notes

As the path specification for search stated only one unique path `localhost/search/Search%20Query` it makes impossible to apply it to both by title or genre. I applied it only to title.
