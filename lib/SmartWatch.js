var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}


extend(SmartWatch.prototype,Watch);
extend(SmartWatch.prototype,Tablet);

function SmartWatch() {
 Watch.call(this);
 Tablet.call(this);
}

module.exports = SmartWatch;