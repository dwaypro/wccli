var fs = require('fs'),
    path = require('path'),
    os = require('os');

    const home = os.homedir();
    const globalFileName = '/assets/newwebcomponent2.js';
    const globalPath = path.join(path.dirname(require.main.filename), globalFileName);
    
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


    prepareFIle(componentName).then(function(){
        fs.readFile(globalPath, "utf-8", (err, data) =>{
            fs.writeFile(`${componentName}.js`, data, function(err){
                if(err) throw err;
                console.log(`${componentName} created`);
            });
        })
    })
}


function prepareFIle(name){
    var promise = new Promise(function(resolve,reject){
        var className = name[0].toUpperCase() + name.slice(1);
        var templateName = name[0].toLowerCase() + name.slice(1);

        var template1 = "`";
        var template2 = "`";
        var template3 = template1+template2;

        var localFIleName = '/assets/newwebcomponent2.js';
        var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
        
        resolve(fs.writeFile(localFilePath, `
class ${className} extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = document.createElement('template');
        template.innerHTML = ${template3}
        shadowRoot.appendChild(template.content.cloneNode(true));
    }


    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
    }
}

customElements.define('${templateName}', ${className});

export {${className}}
            
        `, (err, data) =>{
            if(err) throw err;
            console.log('made it here!');
        }))
    })

    return promise;
}

function createWebComponentClass(){

}

module.exports = {
    generate: generate,
}