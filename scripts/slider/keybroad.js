'use strict';

app
.service('keyBroadService', function ($document, $location, $rootScope) {
    
    var KEY_CODE = {
        RETURN: 10009,
        ESC: 27,
        MEDIA_REWIND: 412,
        MEDIA_FAST_FORWARD: 417,
        MEDIA_PLAY: 415,
        MEDIA_PAUSE: 19,
        MEDIA_STOP: 413,
        MEDIA_TRACK_PREVIOUS: 10232,
        MEDIA_TRACK_NEXT: 10233
    };
    if(window.tizen) {
        tizen.tvinputdevice.registerKey('MediaRewind');
        tizen.tvinputdevice.registerKey('MediaFastForward');
        tizen.tvinputdevice.registerKey('MediaPlay');
        tizen.tvinputdevice.registerKey('MediaPause');
        tizen.tvinputdevice.registerKey('MediaStop');
        tizen.tvinputdevice.registerKey('MediaTrackPrevious');
        tizen.tvinputdevice.registerKey('MediaTrackNext');
        tizen.tvinputdevice.registerKey('Info');
        tizen.tvinputdevice.registerKey('Tools');
    }

    var back = function () {
        var currentPath = $location.path();
        if(currentPath.indexOf('slider') !== -1) {
            $location.path('/browser');
            //$window.history.back();
        }
        else {
            //console.log(currentPath+ ': '+currentPath.indexOf('slider'));
        }
    };

    $document.on('keydown', function (event) {
        
        switch (event.keyCode) { 
            case KEY_CODE.RETURN: /*RETURN*/
            case KEY_CODE.ESC:/*ESC*/
                back();
                break;
            case KEY_CODE.MEDIA_TRACK_PREVIOUS: /*PREVIOUS*/
                $rootScope.$broadcast('slider:pre', event);
                break;
            case KEY_CODE.MEDIA_TRACK_NEXT: /*NEXT*/
                $rootScope.$broadcast('slider:next', event);
                break;
            case KEY_CODE.MEDIA_PLAY: /*PLAY*/
                $rootScope.$broadcast('slider:play', event);
                break;
            case KEY_CODE.MEDIA_PAUSE: /*PAUSE*/
                $rootScope.$broadcast('slider:pause', event);
                break;
            case KEY_CODE.MEDIA_STOP: /*STOP*/
            case KEY_CODE.MEDIA_REWIND: /*REWIND*/
            case KEY_CODE.MEDIA_FAST_FORWARD:
            default:
                $rootScope.$broadcast('slider:keydown', event);
                break;
        }
    });

});