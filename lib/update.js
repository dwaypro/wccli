var fs = require('fs'),
    path = require('path'), 
    ncp = require('ncp');


function update(options){
     /**
     * copy new project to users process.cwd();
     */
    //   var localFIleName = '/assets/newproject/projectconfig';
    //   var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);


      let webpackFileLocation = '/assets/newproject/projectconfig/webpack.config.js';
      let indexFileLocation = '/assets/newproject/projectconfig/dist/index.html';
      let webpackconfig = path.join(path.dirname(require.main.filename), webpackFileLocation);
      let indexFile = path.join(path.dirname(require.main.filename), indexFileLocation);
    //   var localFilePath = path.join(path.dirname(require.main.filename), localFIleName);
      console.log("🚀 ~ file: update.js ~ line 12 ~ update ~ webpackconfig", webpackconfig, indexFile);
    console.log('updating...');


    console.log('webpackconfig ==>', webpackconfig);

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