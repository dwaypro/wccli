var fs = require('fs'),
    path = require('path'),
    http = require('https');
    const globalFileName = '/bash/initialize.sh';
    const globalPath = path.join(path.dirname(require.main.filename), globalFileName);
    console.log('globalPath', globalPath);
const shell = require('shelljs');

function newProject(name){
    // console.log('new project created', path.basename('./assets'));    

    //create directory with project name
    //inside directory clone webpack project
    shell.exec(globalPath);
    //rename repo
    fs.rename('projectconfig', name);
    //inside source directory create directory with project name
    
    //inside project name directory run command wbc g name
    // at root run npm install
    // run npm run build
    // update the index file to include the project name webcomponent
    // at root run npm run start

}


module.exports = {
    newProject: newProject
}