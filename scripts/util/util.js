/**
 * file sort
 *
 * sortMode:
 * name
 * created
 */

var FileSort = ( function() {

        var CONSTANTS = {
            NAME : 'name',
            CREATED : 'created'
        };
        
        var compare = function(a, b, sortMode){
            return a[sortMode] ? (a[sortMode] + '').localeCompare((b[sortMode] + '')) : -1;
        };

        var sort = function(files, sortMode) {
            if (files) {
                files.sort(function(a, b) {
                    if(sortMode === CONSTANTS.CREATED) {
                        return compare(b, a, sortMode);
                    } else {
                        return compare(a, b, sortMode);
                    }
                });
            }
            files.forEach(function(f){
                //console.log('name:' + f.name + ', created:' + f.created);
            });
            
            return files;
        };

        return {
            CONSTANTS : CONSTANTS,
            sort : sort,
        };
    }());

var testArray = [{
    "isFile" : false,
    "path" : "images/",
    "created" : "2015-11-14T07:32:58.000Z",
    "modified" : "2015-11-14T07:32:58.000Z",
    "parent" : {
        "isFile" : false,
        "path" : "images",
        "created" : "2015-11-14T07:32:58.000Z",
        "modified" : "2015-11-14T07:32:58.000Z",
        "parent" : null,
        "fullPath" : "images",
        "readOnly" : false,
        "name" : "",
        "length" : 4,
        "isDirectory" : true
    },
    "fullPath" : "images/1",
    "readOnly" : false,
    "name" : "aaa",
    "length" : 0,
    "isDirectory" : true
}, {
    "isFile" : true,
    "path" : "images/",
    "created" : "2015-11-13T08:59:23.000Z",
    "modified" : "2015-11-13T08:59:23.000Z",
    "parent" : {
        "isFile" : false,
        "path" : "images",
        "created" : "2015-11-14T07:32:58.000Z",
        "modified" : "2015-11-14T07:32:58.000Z",
        "parent" : null,
        "fullPath" : "images",
        "readOnly" : false,
        "name" : "",
        "length" : 4,
        "isDirectory" : true
    },
    "fullPath" : "images/9.jpg",
    "readOnly" : false,
    "name" : "bbb.jpg",
    "fileSize" : 138527,
    "isDirectory" : false,
    "uri" : "file:///opt/usr/media/Images/9.jpg"
}];
//console.log('order by name:');
FileSort.sort(testArray, FileSort.CONSTANTS.NAME);
//console.log('order by CREATED time:');
FileSort.sort(testArray, FileSort.CONSTANTS.CREATED);
