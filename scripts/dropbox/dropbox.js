'use strict';

app.directive('dropBoxGrid', ['$timeout', 'focusController', 'FocusUtil', 'contentData',
    function ($timeout, focusController, FocusUtil, contentData) {
    return {
        restrict: 'E',
        templateUrl: 'views/dropbox-tpl.html',
        scope: {
          focusOption: '=',
          reload: '&',
          upper: '@'
        },
        link: function ($scope, $element, $attr) {

            //mfj
            $scope.dirs = $scope.dirs || {};
            $scope.images = $scope.images || {};

            $scope.contextMenu1 = {
                items : [
                    {id: 'Title', content: 'Title'},
                    {id: 'Date', content: 'Date'}
                ],
                menuOption: {
                    0: {
                        style: {
                            width: '300px'
                        }
                    }
                },
                show: false,
                position: {x: 1581, y: 834}
            };

            $scope.openContextMenu1 = function(){
                $scope.contextMenu1.show = !$scope.contextMenu1.show;       
                if($scope.contextMenu1.show === false){
                    $scope.dropdownTip = false;
                } else {
                    $scope.dropdownTip = true;
                }
            };
            
            $scope.selectMenu1 = function(itemId, event){
                $scope.selectedItemName1 = itemId;
                $scope.contextMenu1.show = false;
                $scope.dropdownTip = false;
                
                for (var i = 0; i < $scope.contextMenu1.items.length; i++){
                    $scope.contextMenu1.items[i].showCheck = false;
                    if ($scope.contextMenu1.items[i].id === $scope.selectedItemName1){
                        $scope.contextMenu1.items[i].showCheck = true;
                    }
                }

                $scope.dirs = contentData.currentFloderList;
                $scope.images = contentData.currentPhotoList;
                if (itemId === 'Title'){
                    FileSort.sort($scope.dirs, FileSort.CONSTANTS.NAME);
                    FileSort.sort($scope.images, FileSort.CONSTANTS.NAME);              
                } else {
                    FileSort.sort($scope.dirs, FileSort.CONSTANTS.CREATED);
                    FileSort.sort($scope.images, FileSort.CONSTANTS.CREATED);         
                }
                var totalFiles = $scope.dirs.concat($scope.images);                
                
                var data1 = JSON.parse($scope.upper);
                if(data1.isUpperFloder) {totalFiles.unshift({'isUpperFloder': true, 'path':data1.path});}

                //emit app contorller reload func
                $scope.reload({files:totalFiles, dirs:$scope.dirs, images:$scope.images});
            };
        } 
    };
 }]);

