module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "es6": true,
        "browser": true,
        "jest/globals": true
    },
    "plugins": [
        'jest'
    ],
    "globals": {
        "API_URL": true
    },
    "rules" : {
        "react/jsx-filename-extension": 0,
        "react/forbid-prop-types": 0
    }
};
