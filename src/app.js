const { r } = require('renaissance')
const AppendHtmlAdapter = require('renaissance-append-html')

const Utils = require('./plugins/Utils')
const LocalStorage = require('./adapters/LocalStorage')
const HelloWorld = require('./components/HelloWorld')
const HelloWorldPlugin = require('./plugins/hello-plugin')

const utilsPlugin = r.registerPlugin('utils', Utils);
const helloPlugin = r.registerPlugin('hello', HelloWorldPlugin);
const aha = r.registerAdapter('appendHTML', AppendHtmlAdapter);
const lsa = r.registerAdapter('localStorage', LocalStorage);

// plugin
r.hello.hello();

// adapter
aha.appendHTML('<p>appendHTML</p>', r.utils.getNodes('#renaissance')[0], function () { console.log('AHA') })
console.log(r.utils.getNodes('#renaissance'));
lsa.save('foo', 'bar');
console.log(lsa.get('foo'));

// component
const hw = new HelloWorld();
// mixin
hw.sayHello();
r.utils.attachTo(hw, '#hello-world');
