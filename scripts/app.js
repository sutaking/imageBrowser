'use strict';

var app = angular.module('caph3-imageViewer', ['caph.ui', 'caph.focus', 'content', 'ngRoute'])
.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
            .when('/browser', {
                templateUrl : 'views/main.html',
                controller: 'listViewController as main'
            })
            .when('/browser/slider', {
                templateUrl : 'views/slider.html',
                controller: 'sliderController as player'
            }).
            otherwise({
                redirectTo: '/browser'
            });
}])
.controller('listViewController', ['deviceData', 'contentData', '$timeout', '$scope', '$location', 'keyBroadService', 'focusController','FocusUtil', 
function (deviceData, contentData, $timeout, $scope, $location, keyBroadService, focusController, FocusUtil) {
    
    var vm = this;
    vm.deviceTitle = deviceData.deviceTitle;
    vm.deviceStatus = deviceData.deviceStatus;
    //vm.category = deviceData.deviceCategory;
    vm.progressBarWidth = 324*(vm.deviceStatus.used/vm.deviceStatus.storage);
    vm.currentPath = contentData.currentPath;
    
    // init
    contentData.loadFloder(contentData.historyPath[vm.currentPath], function (files, dirs, images) {
        contentData.currentFilelist = files;
        contentData.currentPhotoList = images;
        reloadList(files, dirs, images);
    });


    vm.content = vm.content || [{}];
    
    //update event
    vm.update = function (item, $index) {

        if(item.isUpperFloder === true) {
            contentData.findUpperFloder(contentData.historyPath[item.path], function (files, dirs, images) {
                contentData.currentFilelist = files;
                contentData.currentPhotoList = images;
                vm.currentPath = contentData.currentFilelist[1].path;
                reloadList(files, dirs, images);
            });
        }

        else if (item.isDirectory === true) {
            contentData.loadFloder(item, function(files, dirs, images) {
                contentData.currentFilelist = files;
                contentData.currentPhotoList = images;
                contentData.historyPath[contentData.currentFilelist[1].path] = item;
                vm.currentPath = contentData.currentFilelist[1].path;
                reloadList(files, dirs, images);
            });
        }

        else if (item.isFile === true) {
            var picI = $index-contentData.currentFloderList.length;
            contentData.selecteIndex = vm.content[0].isUpperFloder ? picI-1:picI;
            contentData.currentPath = vm.currentPath;
            $location.path($location.path() + '/slider');
        }
    };

   var reloadList = function (files, dirs, images) {
        $scope.$applyAsync(function () {
            vm.content =[];
            $('#brower-list').trigger('reload');
        });
        $timeout(function () {
            vm.content = files;
            contentData.currentPhotoList = images;
            contentData.currentFloderList = dirs;
            vm.content.thumbnails = contentData.getThumbnails();
            $('#brower-list').trigger('reload'); 
            $timeout(function(){
                focusController.focus($('#file-item-0')); 
                //focusController.focus($('.sample-button'));
            },10);
        });
    };
    
    vm.reloadData = function (files, dirs, images) {
        return reloadList(files, dirs, images);
    }; 

}]);