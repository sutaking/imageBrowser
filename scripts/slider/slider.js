'use strict';

app.controller('sliderController', ['$timeout', '$scope', 'contentData', 'focusController', 'keyBroadService',
    function ($timeout, $scope, contentData, focusController) {

        var vm = this;
        $scope.urlDefault = 'resource/images/mc_icon_thumb_default_photo_n.png';
        //console.log('!!---------------- Slider -------------!!');
        vm.isPlay = true;
        vm.listIndex = 0;
        vm.listLength = 0;
        var menuBar = $('.slider-toolbar');
        var buttons = $('.btn');
        var PREVIOUS_BTN = buttons.eq(0);
        var PLAY_BTN = buttons.eq(1);
        var PAUSE_BTN = buttons.eq(2);
        var NEXT_BTN = buttons.eq(3);

        $timeout(function(){
            focusController.focus(PLAY_BTN);
        }, 500);
        
        vm.picList = contentData.currentPhotoList;
        vm.thumbnailList = contentData.getThumbnails();
        vm.listLength = vm.picList.length;
        updatePhoto(contentData.selecteIndex>=vm.listLength ? 0:contentData.selecteIndex);

        vm.btnEvent = function (method, params) {
            eventMethod[method] && eventMethod[method](params);
        };

        var intervalSildeID;
        var eventMethod = {
            previousPush : function (params) {
                ////console.log('previousPush');
                cancelPlay(intervalSildeID);
                if(vm.listIndex !== 0) {
                    lastPage(vm.listIndex);
                }
                else {
                    updatePhoto(vm.listLength-1);
                }
            },
            nextPush : function (params) {
                ////console.log('nextPush');
                cancelPlay(intervalSildeID);
                nextPage(vm.listIndex);
            },
            playTogglePush : function (params) {
                clearInterval(intervalSildeID);
                if (vm.isPlay) {
                    intervalSildeID = setInterval(function() { 
                        nextPage(vm.listIndex);
                    }, 3000);
                }
                vm.isPlay = !vm.isPlay;
                if(vm.isPlay) {
                    setFocus(PLAY_BTN);
                }
                else {
                    setFocus(PAUSE_BTN);
                }
            }
        };
        vm.onFocused = function (item, $index) {
            //$('#photo-border-'+$index).removeClass('ng-hide');
        };
        vm.onBlurred = function ($index) {
            //$('#photo-border-'+$index).addClass('ng-hide');
        };

        vm.onSelected = function (item, $index, $event) {
            cancelPlay(intervalSildeID);
            updatePhoto($index);
        };

        var cancelPlay = function (id) {
            clearInterval(id);
            vm.isPlay = true;
        };

        function updatePhoto (index) {
            vm.currentPhoto = vm.picList[index];
            //console.log(JSON.stringify($scope.currentPhoto));
            //console.log(vm.currentPhoto.uri);
            vm.listIndex = index;
            if(!vm.isPlay) {
                $scope.$digest();
            }
        }

        function setFocus (btn) {
            $timeout(function(){
                focusController.focus(btn);
            });
        }
        function nextPage (index) {
            var nextIndex = index === vm.listLength-1 ? 0 : index+1;
            updatePhoto(nextIndex);
        }
        function lastPage (index) {
            var lastIndex = index === 0 ? 0 : index-1;
            updatePhoto(lastIndex);
        }

        var showMenu = function (event) {
            clearInterval(menuHideID);
            menuBar.removeClass('ng-hide');
            menuHideID = setInterval(function () {
                menuBar.addClass('ng-hide');
            }, 5000);
        };

        var menuHideID = null;
        var mouseX, mouseY;
        vm.mouseMove = function ($event) {
            if($event.screenX !== mouseX || $event.screenY !== mouseY) {
                mouseX = $event.screenX;
                mouseY = $event.screenY;
                showMenu('mouser move');
            }
        };

        $scope.$on('slider:keydown', function (code) {
            ////console.log('slider:keydown');
            showMenu('keydown'); 
        });
        $scope.$on('slider:pre', function (code) {
            ////console.log('slider:pre');
            showMenu('keydown');
            setFocus(PREVIOUS_BTN);
            lastPage(vm.listIndex);
        });
        $scope.$on('slider:next', function (code) {
            ////console.log('slider:next');
            showMenu('keydown');
            setFocus(NEXT_BTN);
            nextPage(vm.listIndex);
        });
        $scope.$on('slider:play', function (code) {
            ////console.log('slider:play');
            showMenu('keydown');
            if (vm.isPlay) {
                setFocus(PLAY_BTN);
                eventMethod['playTogglePush']();
            }
        });
        $scope.$on('slider:pause', function (code) {
            ////console.log('slider:pause');
            showMenu('keydown');
            if (!vm.isPlay) {
                setFocus(PAUSE_BTN);
                eventMethod['playTogglePush']();
            }
        });

}]);