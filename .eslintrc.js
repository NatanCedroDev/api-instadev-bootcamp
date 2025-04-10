module.exports = {
    env:{
        commonjs: true,
        es2021: true,
        node: true,
    }, 
    extends: [ 
        'airbnb-base' ,
    ],
    parserOptions: {
        ecmaVersion: 12, 
    },
    rules: {
        'no-params-reassign': 'off' , 
        camelcase: 'off' , 
        'no-usuned-vars': ['error', {argsIgnorePattern: 'next' }],
        'max-len': ['error', { code: 80 }],
    },
};