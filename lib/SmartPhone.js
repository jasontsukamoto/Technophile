var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

var phone = new Phone(3333333);
var tablet = new Tablet();
var gameConsole = new GameConsole('Smart Phone');
var webBrowser = new WebBrowser();

function extend(destination, source) {
  for (var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function SmartPhone() {
}

extend(SmartPhone.prototype, phone);
extend(SmartPhone.prototype, tablet);
extend(SmartPhone.prototype, gameConsole);
extend(SmartPhone.prototype, webBrowser);
module.exports = SmartPhone;