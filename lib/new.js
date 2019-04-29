var fs = require('fs'),
    path = require('path'),    
    shell = require('shelljs'),
    ncp = require('ncp');

function newProject(name){
    /**
     * copy new project to users process.cwd();
     */
    var localFIleName = '/assets/projectconfig';
    var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
    ncp(localFilePath,process.cwd(), function(err){
        if(err){
            console.log('err', err);
        }
        //rename project
        console.log('new project created');
        fs.rename('projectconfig', name);
        //inside source directory create directory with project name
        // fs.mkdir( '' + name + '/src/' + name, function(err){
        //     if (err) console.log('err', err);
        // })
        
        // shell.cd('' + name + '/src/' + name);
        // shell.exec(`wbc g ${name}`);
        // shell.cd('../../');
        // at root run npm install
        shell.cd(name);
        shell.exec('npm install');
        // run npm run build
        shell.exec('npm run build');
        // at root run npm run start
        shell.exec('npm run start');

        /**
         * need to appropiately handle when folder already exists.
         */
    })
}


module.exports = {
    newProject: newProject
}