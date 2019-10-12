var fs = require('fs'),
    path = require('path');        
    const ncp = require('ncp');
    const newComponentSchematic = require('../bin/assets/schematics/newcomponentschematic/newcomponent/newschematic');

function generate(name){
        var localFIleName = '/assets/schematics/newcomponentschematic/';
        var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
        var newComponent = newComponentSchematic.newComponentSchematic(name);
        var newComponent = newComponent.replace(/'/g, '`');

        fs.writeFile('file.js', newComponent, (err)=>{
            if(err){
                console.log('err', err);
            }
            fs.rename('file.js', name +'.js')
        });
   
}


module.exports = {
    generate: generate,
}