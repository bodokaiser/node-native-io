var nativeGPIO = require('native-gpio');

exports.GPIO = nativeGPIO.GPIO;

exports.createGPIO = function(id) {
    return new nativeGPIO.GPIO(id);
};
