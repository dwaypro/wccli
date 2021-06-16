var fs = require('fs'),
    path = require('path'),    
    shell = require('shelljs'),
    ncp = require('ncp');

function newProject(name){    
    /**
     * copy new project to users process.cwd();
     */
    var localFIleName = '/assets/newproject/projectconfig';
    var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);

    fs.mkdir(name,null,(err) => {
        if(err){
            console.log('err ==>', err);            
        }else{
            ncp(localFilePath,name, function(err){
                if(err){
                    console.log('err', err);
                }else{
                     // at root run npm install
                    shell.cd(name);
                    shell.exec('npm install');
                     // run npm run build
                    shell.exec('npm run build');
                     // at root run npm run start
                    shell.exec('npm run start');
                }                
            })
        }
    })
}


module.exports = {
    newProject: newProject
}