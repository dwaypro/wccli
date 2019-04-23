var fs = require('fs');

// var boilerplatecode = require('../boilerplate/newwebcomponent');
// var boilerplate = require('../boilerplate/newwebcomponent.txt');


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
    fs.readFile("./newwebcomponent.txt", "utf-8", (err, data) =>{
        fs.writeFile(`${componentName}.js`, data, function(err){
            if(err) throw err;
            console.log(`${componentName} created`);
        });
    })
}

function createWebComponentClass(){

}

module.exports = {
    generate: generate,
}