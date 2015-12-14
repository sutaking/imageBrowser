'use strict';

var content = angular.module('content',[])
.factory('deviceData', function(){

    return {
        deviceTitle: 'Michelle USB',
        deviceStatus: {
            storage: 1024*21341234,
            used: 1024*11661234
        },
        deviceCategory:[
            'USB driver Partition',
            'Backup Partition'
        ]
    };
})
.factory('localData', ['$http', function ($http) {

    var getJson = function (url, cb) {
        $http.get(url).success(function(data){
            var dir = [];
            var pic = [];
            for(var i=0; i<data.length; i++) {
                if(data[i].isFile === false) {
                    dir.push(data[i]);
                }
                else {
                    pic.push(data[i]);
                }
            }
            cb(data, dir, pic);
        });
    };

    var thumbnail = [];
    for(var i=1; i<=20; i++) {
        var o = 'testData/large/';
        var t = 'testData/thumb/';
        var j = '.jpg';
        thumbnail[o+i+j] = t+i+j;
    }

    return {
        thumbnail:thumbnail,
        loadRoot:function (cb) {
            getJson('testData/root.json', cb);
        },
        localFloder:function (name, cb) {
            getJson('testData/'+ name +'.json', function(files, dir, pic) {
                files.unshift({'isUpperFloder': true, 'path':name});
                cb(files, dir, pic);
            });
        }        
    };
}])
.factory('contentData', ['localData', function (localData){

    var thumbnails = [];    

    var localFlow = function (item, cb) {
        
        if(item === null || item === undefined) {
            localData.loadRoot(cb);
        }
        else {            
            localData.localFloder(item.name, cb);
        }
    };

    return {
        historyPath:[],
        currentPath:null,
        currentFilelist:null,
        currentPhotoList:null,
        currentFloderList:null,
        selecteIndex:null,
        loadFloder : function (item, cb) {
            
            //HTML5 local file
            localFlow(item, cb);
        },
        findUpperFloder: function (item, cb) {
            
            //HTML5 local file
            localFlow(item, cb);
        },
        getThumbnails: function () {

            //HTML5 local file
            return localData.thumbnail;
        }        
    };
}]);