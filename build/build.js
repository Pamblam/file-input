const fs = require('fs');
const path = require('path');
var UglifyJS = require("uglify-js");
const APP_ROOT = path.join(__dirname, '..');

// Increment the build number...
let package = JSON.parse(fs.readFileSync(`${APP_ROOT}/package.json`, 'utf8'));
let [major, minor, build] = package.version.split('.').map(n=>+n);
package.version = `${major}.${minor}.${build+1}`;

// Update package.json
fs.writeFileSync(`${APP_ROOT}/package.json`, JSON.stringify(package, null, '\t'));

// Update the readme
let readme = fs.readFileSync(`${APP_ROOT}/README.md`, 'utf8').replace(/\d+\.\d+\.\d+/g, package.version);
fs.writeFileSync(`${APP_ROOT}/README.md`, readme);

// Compile the source code
let types = fs.readFileSync(`${APP_ROOT}/src/types.json`, 'utf8');
let code = fs.readFileSync(`${APP_ROOT}/src/file-input.js`, 'utf8');
code = code.replaceAll('{{ VERSION }}', package.version);
code = code.replace('static #types = {};', `static #types = ${types};`);

// Minify and write to file
let min = UglifyJS.minify(code, {compress: {unused: false}});
fs.writeFileSync(`${APP_ROOT}/dist/file-input.js`, min.code);