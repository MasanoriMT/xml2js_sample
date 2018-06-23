var xml2js = require('xml2js');

var obj = {
    "hoge": {
        "foo": [ 1, null ],
        "baz": {
          "foo": [ true, "bar" ],
          "baz": "qux"
        }
    }
  }
var opt =  {
    "headless": true
}

var builder = new xml2js.Builder(opt);
var xml = builder.buildObject(obj);

console.log(xml)
