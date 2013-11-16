# node-native-io

**node-native-io** contains **sysfs** bindings for **gpio** (and when finally
working **pwm**) in nodejs.

## Installation

Install **node-native-io** with [npm(1)](http://npmjs.org):

    $ npm install node-native-io

## Preview

    var nativeio = require('native-io');

    nativeio.createGPIO(22)
        .direction(nativeio.GPIO.OUT)
            .value(nativeio.GPIO.HIGH)
        ;

## Documentation

Basically **node-native-io** only uses a C++ add-on to sweaten access over
the raw **fs** api.

### pwm

Going to be supported when usage through device tree overlays is possible on
my beaglebone black with archlinux.

### gpio

The **G**eneral **P**urpose **I**nput **O**utput module targets the sysfs api
at `/sys/class/gpio`. 

#### Class: GPIO

On object creation the corresponding GPIO is created, on garbage collection it 
should be unexported.

##### new GPIO(id)

    var gpio = new nativeio.GPIO(22);

    // is equal to

    var gpio = nativeio.createGPIO(22);

Creates new gpio object for pin `id`.

##### gpio.direction([direction])

    if (gpio.direction() === nativeio.GPIO.IN)
        gpio.direction(nativeio.GPIO.OUT);

Returns and sets direction of a GPIO.

##### gpio.value([value])

    if (gpio.value() === nativeio.GPIO.HIGH)
        gpio.value(native.io.GPIO.LOW);

Returns and sets value of a GPIO. If direction is `IN` and you set a new 
`value` you will get an error.

## License

Copyright © 2013 Bodo Kaiser <i@bodokaiser.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
