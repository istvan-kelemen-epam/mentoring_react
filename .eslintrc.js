module.exports = {
	"extends": "airbnb",
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module"
	},
	"settings": {
		"react": {
			"version": "16.3.2"
		}
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": [
			"off",
			"always"
		],
		"global-require": [
			"off",
			"always"
		],
		"import/no-extraneous-dependencies": [
			"off",
			"always"
		],
		"react/jsx-filename-extension": [
			"off",
			"always"
		]
	}
};
