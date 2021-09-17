require('@babel/register')
// игнорируем импорты `.scss`
require( 'ignore-styles' );

const app = require("./server/app.js");

app();