# Mentoring program React JS

## 4th Testing

### Install

```bash
$ git clone https://github.com/istvan-kelemen-epam/mentoring_react.git
$ cd mentoring_react
$ git checkout 4_testing
```

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
$ npm test -- ---coverage
```

...and then look at `coverage/lcov-report/index.html` in browser

### Notes

snapshot testing found in `scenes/App/__tests__/index.test.jsy`

`enzyme` test can be found in `scenes/Result/scenes/List/__tests__/index.test.jsx`
