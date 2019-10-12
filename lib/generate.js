var fs = require('fs'),
    path = require('path');        
    const ncp = require('ncp');


    const newComponentSchematic = require('../bin/assets/schematics/newcomponentschematic/newcomponent/newschematic');
    const newVueComponentSchematic = require('../bin/assets/schematics/vuecomponentschematic/newschematic');
    const newVueWebComponentSchematic = require('../bin/assets/schematics/vuewebcomponentschematic/newschematic');

function generate(name, options){

        var localFIleName = '/assets/schematics/newcomponentschematic/';
        var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
        // var newComponent = newComponentSchematic.newComponentSchematic(name);
        var newComponent = determineSchematic(options, name);
        var newComponent = newComponent.replace(/'/g, '`');


        fs.writeFile('file.js', newComponent, (err)=>{
            if(err){
                console.log('err', err);
            }
            fs.rename('file.js', name +'.js')
        });           
}

function determineSchematic(options, name){
    if(options.v){
        return newVueComponentSchematic.newComponentSchematic(name)        
    }else if(options.vc){
        return newVueWebComponentSchematic.newComponentSchematic(name)
    }else{
        return newComponentSchematic.newComponentSchematic(name)
    }
}


module.exports = {
    generate: generate,
}