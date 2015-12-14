'use strict';

app.filter('formatFile', function () {
    return function (file, type) {
        if(!file)
            return '';

        if (file.indexOf('.') !== -1){
            if(type === 0) {           
                var s = file.lastIndexOf('.');
                return file.substring(0, s);
            } else if(type === 1) {
                var s = file.lastIndexOf('.');
                return file.substring(s + 1, file.length);
            }
        } else {
            if (type === 1 ) {
                return '';
            }
            return file;
        }
    };
})
.filter('formatDate', function () {
    return function (date) {        
        if(!date)
            return '';
        
        var s = Date.parse(date);
        var m = new Date(s);
        return m.toUTCString().substring(0, 16);
    };
})
.filter('textCut', function () {
    return function (text, len) {
        if(!text)
            return '';

        if (text.length > len) {
            return text.substr(0, len) + '...';
        }
        return text;
    };
})
.filter('bytes', function () {
    return function (val, decimals) {
       if (isNaN(parseFloat(val)) || !isFinite(val)) return '-';
       if(val === 0) return '0';
       if (typeof decimals === 'undefined') decimals = 1;
       var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
       var number = Math.floor(Math.log(val) / Math.log(1024));
       return (val/Math.pow(1024, Math.floor(number))).toFixed(decimals) + units[number];
    };
})
.filter('percentage', ['$filter', function ($filter) {
    return function (val, decimals) {
       return $filter('number')(val*100, decimals) + '%';
    };
}]);