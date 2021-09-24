var fs = require('fs'),
    path = require('path'), 
    ncp = require('ncp');


function update(options){
     /**
     * copy new project to users process.cwd();
     */
    
    let webpackFileLocation = '/assets/newproject/projectconfig/webpack.config.js';
    let indexFileLocation = '/assets/newproject/projectconfig/dist/index.html';
    let webpackconfig = path.join(path.dirname(require.main.filename), webpackFileLocation);
    let indexFile = path.join(path.dirname(require.main.filename), indexFileLocation);

    ncp(webpackconfig,"webpack.config.js", (err)=> {
        if(err){
            console.log('err ==>', err);
        }
        console.log('updated webpack file');
    });

    
    ncp(indexFile,'./dist/index.html', (err)=> {
        if(err){
            console.log('err ==>', err);
        }
        console.log('updated index file');
    });
}

module.exports = {update:update};