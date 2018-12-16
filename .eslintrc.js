module.exports = {
	"parser": "babel-eslint",
	"plugins": [
		"jest"
	],
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
		"jest/globals": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
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
		]
    },
	"extends": ["eslint:recommended", "plugin:react/recommended"]
};
