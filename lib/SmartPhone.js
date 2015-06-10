var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function extend(destination, source) {
  for (var k in source) {
    if(source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartPhone.prototype, Phone);
extend(SmartPhone.prototype, Tablet);
extend(SmartPhone.prototype, GameConsole);
extend(SmartPhone.prototype, WebBrowser);

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  Tablet.call(this);
  GameConsole.call(this, 'Smart Phone');
  WebBrowser.call(this);
}

module.exports = SmartPhone;