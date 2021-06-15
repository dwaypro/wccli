var fs = require('fs'),
    path = require('path');        
    const ncp = require('ncp');
    const shell = require('shelljs');

    /**
     * Standard HTML 5 web component no library included. 
     */
    const newComponentSchematic = require('../bin/assets/schematics/newcomponentschematic/newcomponent/newschematic');
    const newComponentSchematicHTML = fs.readFileSync(path.join(path.dirname(require.main.filename),'/assets/schematics/newcomponentschematic/newcomponent/newschematic.html'), 'utf8');
    const newComponentSchematicCSS = fs.readFileSync(path.join(path.dirname(require.main.filename),'/assets/schematics/newcomponentschematic/newcomponent/newschematic.css'), 'utf8');

    /**
     * standalone vue component, likely to be included within other HTML5 web components. 
     */
    const newVueComponentSchematic = require('../bin/assets/schematics/vuecomponentschematic/newschematic');
    const newVueComponentSchematicHTML = fs.readFileSync(path.join(path.dirname(require.main.filename),'/assets/schematics/vuecomponentschematic/newschematic.html'), 'utf8');
    const newVueComponentSchematicCSS = fs.readFileSync(path.join(path.dirname(require.main.filename),'/assets/schematics/vuecomponentschematic/newschematic.css'), 'utf8');
    /**
     * newVueWebComponentSchematic - schematic for html 5 web component with vue enabled within the shadow dom. 
     */
    const newVueWebComponentSchematic = require('../bin/assets/schematics/vuewebcomponentschematic/newschematic');
    const newVueWebComponentSchematicHTML = fs.readFileSync(path.join(path.dirname(require.main.filename),'/assets/schematics/vuewebcomponentschematic/newschematic.html'), 'utf8');
    const newVueWebComponentSchematicCSS = fs.readFileSync(path.join(path.dirname(require.main.filename),'/assets/schematics/vuewebcomponentschematic/newschematic.css'), 'utf8');
    
function generate(name, options){

        var localFIleName = '/assets/schematics/newcomponentschematic/';
        var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
        var newComponent = determineSchematic(options, name);
        shell.mkdir(name);
        shell.cd(name);

        newComponent.forEach((file) =>{
            if(file.ext === '.js'){
                file.file = file.file.replace(/'/g, '`');
            }
            fs.writeFile(name + file.ext, file.file, (err) =>{
                if(err){
                    console.log('err', err);
                }
            })
            
        });  

        
        fs.writeFile('file.css', newComponent.cssFile, (err)=>{
            if(err){
                console.log('err', err);
            }
            fs.rename('file.css', name +'.css',(err) =>{
                if(err){
                    console.log('err', err);
                }
            })
        });  
}

function determineSchematic(options, name){
    if(options.v){
        return [
            {file: newVueComponentSchematicCSS, ext: '.css'},
            {file: newVueComponentSchematicHTML, ext: '.html'},
            {file: newVueComponentSchematic.newComponentSchematic(name), ext: '.js'},
        ]    
    }else if(options.vc){
        console.log('newVueWebComponentSchematicHTML', newVueWebComponentSchematicHTML);
        return [
            {file: newVueWebComponentSchematicCSS, ext: '.css'},
            {file: newVueWebComponentSchematicHTML, ext: '.html'},
            {file: newVueWebComponentSchematic.newComponentSchematic(name), ext: '.js'},
        ]
    }else{
        return [
            {file: newComponentSchematicCSS,ext:'.css'},
            {file: newComponentSchematicHTML,ext:'.html'},
            {file: newComponentSchematic.newComponentSchematic(name),ext:'.js'},
        ]
    }
}


module.exports = {
    generate: generate,
}