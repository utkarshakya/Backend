// NOTE: By default Node.js understand common js module, to make it work we need to make a file with .mjs extension
// which explicitly tells the Node that run this file with morden js module which ES module (ECMAScript Module).

function add(a, b){
    console.log(a+b);
}

export default add;

// Now to go the forth.js file to use it.

// Remember, we are using .mjs here to tell the Node that this file uses modern js module but
// you don't need this if have any bundler (eg. vite) in you project.
// Or simply, when you initialise the project with npm you can write the type = "module"
// in your package.json file. Both way tells your Node to treat the file as it using morden js module.