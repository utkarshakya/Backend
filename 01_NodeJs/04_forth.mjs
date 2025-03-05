import add from "./03_third.mjs";

add(3, 2)
// Now run this file.

// Remember, we are using .mjs here to tell the Node that this file uses modern js module but
// you don't need this if have any bundler (eg. vite) in you project.
// Or simply, when you initialise the project with npm you can write the type = "module"
// in your package.json file. Both way tells your Node to treat the file as it using morden js module.