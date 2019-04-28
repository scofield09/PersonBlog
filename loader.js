var fs = require('fs');
var globalConfig = require('./config');

var controllerSet = [];
var pathMap = new Map();

//返回的是一个数组
var files = fs.readdirSync(globalConfig['web_path']);

for(var i = 0;i<files.length;i++){
    var temp = require('./'+globalConfig['web_path']+'/'+files[i]);
    if(temp.path){
        for(var [key,value] of temp.path){
            if(pathMap.get(key)==null){
                pathMap.set(key,value);
            }else{
                throw new Error('url path异常,ur:'+key);
            };
        }
        controllerSet.push(temp)
    }
}

module.exports = pathMap;