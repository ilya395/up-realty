require('@babel/register')
// игнорируем импорты `.scss`
require( 'ignore-styles' );

const app = require("./server/app.js");

const path = require( 'path' );



// транспилируем на лету импорты
// require( '@babel/register')( {
//     configFile: path.resolve( __dirname, './babel.config.js' ),
// } );



app();