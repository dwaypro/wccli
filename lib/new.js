var fs = require('fs'),
    path = require('path'),    
    shell = require('shelljs'),
    ncp = require('ncp');

function newProject(name){
    console.log("🚀 ~ file: new.js ~ line 7 ~ newProject ~ name", name)
    /**
     * copy new project to users process.cwd();
     */
    var localFIleName = '/assets/newproject';
    var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
    ncp(localFilePath,process.cwd(), function(err){
        if(err){
            console.log('err', err);
        }
        //rename project
        console.log('new project created', name);
        fs.rename('projectconfig/', name, function(err){
        console.log("🚀 ~ file: new.js ~ line 20 ~ fs.rename ~ err", err)
            if(err){
                console.log('err', err)
            }else{
                // at root run npm install
                shell.cd(name);
                shell.exec('npm install');
                // run npm run build
                shell.exec('npm run build');
                // at root run npm run start
                shell.exec('npm run start');
            }
        });
        /**
         * need to appropiately handle when folder already exists.
         */
    })
}


module.exports = {
    newProject: newProject
}