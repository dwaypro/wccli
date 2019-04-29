#!/usr/bin/env node


var fs = require('fs'),
    path = require('path'),
    http = require('https');
    // const globalFileName = '/bash/initialize.sh';
    const globalPath = path.join(path.dirname(require.main.filename));
    console.log('globalPath', globalPath);
const shell = require('shelljs');
const ncp = require('ncp');

function newProject(name){
    // console.log('new project created', path.basename('./assets'));    

    //create directory with project name
    //inside directory clone webpack project
    // shell.exec(globalPath);
    
    //take2
    var localFIleName = '/assets/projectconfig';
    var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
    ncp(localFilePath,process.cwd(), function(err){
        if(err){
            console.log('err', err);
        }
        //rename repo
        console.log('new project created');
        fs.rename('projectconfig', name);
        //inside source directory create directory with project name
        fs.mkdir( '' + name + '/src/' + name, function(err){
            if (err) console.log('err', err);
        })

        // at root run npm install
        shell.cd(name);
        shell.exec('npm install');
        // run npm run build
        shell.exec('npm run build');
        // at root run npm run start
        shell.exec('npm run start');
    })

    
    //inside project name directory run command wbc g name
    // update the index file to include the project name webcomponent

}


module.exports = {
    newProject: newProject
}