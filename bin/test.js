const path = require('path');

var localFIleName = '/assets/newproject/projectconfig';
var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);


let mypath = path.join(path.dirname(require.main.filename), localFIleName);

console.log('mypath ==>', mypath);