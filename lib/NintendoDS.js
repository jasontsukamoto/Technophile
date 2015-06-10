var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

var gameConsole = new GameConsole('Nintendo DS');
var webBrowser = new WebBrowser();

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
function NintendoDS() {

}

extend(NintendoDS.prototype, gameConsole);
extend(NintendoDS.prototype, webBrowser);
module.exports = NintendoDS;