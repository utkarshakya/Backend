// NOTE: By default Node.js understand common js module, to make it work we need to make a file with .mjs extension
// which explicitly tells the Node that run this file with morden js module which ES module (ECMAScript Module).

function add(a, b){
    console.log(a+b);
}

export default add;

// Now to go the forth.js file to use it.