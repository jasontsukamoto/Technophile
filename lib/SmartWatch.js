var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

var watch = new Watch();
var tablet = new Tablet();

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function SmartWatch() {

}

extend(SmartWatch.prototype,watch);
extend(SmartWatch.prototype,tablet);
module.exports = SmartWatch;