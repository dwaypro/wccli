var fs = require('fs'),
    path = require('path'),
    os = require('os');

    const home = os.homedir();
    const globalFileName = '/assets/newwebcomponent.txt';
    const globalPath = path.join(path.dirname(require.main.filename), globalFileName);
    console.log('globalPath', globalPath);
/**
 * handler function for generating a new component
 * begins the process of creating 
 * a new webcomponent class with boilerplate
 * @param {name of the component class name and file} componentName 
 */
function generate(componentName){    
    createFile(componentName);
}

function createFile(componentName){
    fs.readFile(globalPath, "utf-8", (err, data) =>{
        fs.writeFile(`${componentName}.js`, data, function(err){
            if(err) throw err;
            console.log(`${componentName} created`);
        });
    })
}


function generateCode(schema){
    console.log('schema', schema);
    return `module.exports = function validate(obj){
            schema.join('\n')
        return true
    }`
}

function createWebComponentClass(){

}

module.exports = {
    generate: generate,
}