var fs = require('fs'),
    path = require('path');
    const globalFileName = '/bash/initialize.sh';
    const globalPath = path.join(path.dirname(require.main.filename), globalFileName);
    
const shell = require('shelljs');

function newProject(name){
    console.log('new project created', name);    

    //create directory with project name
    //inside directory clone webcomponent work bench look alike
    shell.exec(globalPath);

    //inside source directory create directory with project name
    //inside project name directory run command wccli g projectname
    // at root run npm install
    // run npm run build
    // update the index file to include the project name webcomponent
    // at root run npm run start

}


module.exports = {
    newProject: newProject
}