# Markdown Links

***

## Como instalar

Global:
```sh
  $ npm i -g sshregina/SAP003-md-links
```

Local:
```sh
  $ npm i -S sshregina/SAP003-md-links
```
## Como usar (CLI)

Global:
```sh
# md-links <path-to-file>

$ md-links ./some/example.md
```
Local:
```sh
# npx md-links <path-to-file>

$ npx md-links ./some/example.md
```

## Como usar (Node.js)

```javascript
const mdLinks = require('sap003-md-links');

mdLinks("./README.md").then(links => {
	console.log(" links retornados");
	console.log(links);
});
```

## Desenvolvimento do projeto
Este projeto foi desenvolvido com:
- Vanilla JS;
- Node.js.
  
  