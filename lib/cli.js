#!/usr/bin/env node
const mdLinks = require('./index.js');

mdLinks('./README.md')
.then((result) => console.log(result))
.catch(console.error)