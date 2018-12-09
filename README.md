# Mentoring program React JS

## 3rd Components

### Install

```bash
$ git clone https://github.com/istvan-kelemen-epam/mentoring_react.git
$ cd mentoring_react
$ git checkout 3_components
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

### Notes

The folder structure follows the suggestion written at [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1
) and suggested in the course

[Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) seems to be depricated since webpack 4 so I used their suggestion [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) instead

Clicking on Search button when the input field is empty results in no effect.

Clicking on Search button when Search by Title is selected results in a predefined fake result with **7** items independently from the actual search value.

Clicking on Search button when Search by Genre is selected results in a predefined fake result with **0** items independently from the actual search value.
