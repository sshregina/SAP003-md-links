const fs = require('fs');

const mdLinks = (path) => {
  const regexMdlinks = /([^[]+)\](\([^)]*)/gm;

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        const array = data.match(regexMdlinks);
        const result = array.map((el) => {
          const split = el.split('](');
          const text = split[0].replace('\n', '');
          const href = split[1];
          return { text, href };
        });
        resolve(result);
      }
    });
  });
};

module.exports = mdLinks;
