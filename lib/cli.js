#!/usr/bin/env node
const mdLinks = require('./index.js');

mdLinks(process.argv[2])
  .then((result) => result.forEach((el) => {
    console.log('\n', el.href, el.text.substring(0, 50));
  }))
  .catch(console.error);
