module.exports = {
	"extends": "airbnb-base",
	"plugins": [
		"import",
		"react",
		"jsx-a11y"
	],
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
		"max-len": [
			1, 120, 2,
			{"ignoreComments": true}
		],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": "error"
	}
};
