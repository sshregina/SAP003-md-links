const mdLinks = require("../index.js");

describe(mdLinks, () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
    it("returns array", (done) => {
    mdLinks("./lib/__tests__/text.md")
    .then(result => {expect(result).toEqual([
    {href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions", text: "expressões regulares(`RegExp`)"}, 
    {href: "https://github.com/workshopper/learnyounode", text: "learnyounode"}, 
    {href: "https://github.com/workshopper/how-to-npm", text: "how-to-npm"}, 
    {href: "https://github.com/stevekane/promise-it-wont-hurt", text: "promise-it-wont-hurt"}]);
    done()
  })
  });
    it("should be an error", (done) => {
    mdLinks("./lib/__tests__/ext.md") 
    .catch( erro => {
    expect(erro).toEqual("Error: ENOENT: no such file or directory, open './lib/__tests__/ext.md'");
    done()
    }) 
  });
  });