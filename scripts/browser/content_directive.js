'use strict';

app.directive('contentGrid', ['$timeout' ,
    function ($timeout) {
    return {
        restrict: 'AE',
        controllerAs: 'gridlist',
        templateUrl: 'views/contentgrid.html',
        require: 'ngModel',
        scope: {
          ngModel: '=',
          focusOption: '=',
          update: '&'
        },
        link: function ($scope, $element, $attr) {

            $scope.urlDefault = 'resource/images/mc_icon_thumb_default_photo_n.png';
            //console.log(JSON.stringify($scope.ngModel));

            /*$timeout(function(){
                //focusController.focus($('#file-item-0')); 
                focusController.focus($('.sample-button'));
            }, 1000);*/
            
            $scope.onFocused = function(item, $index) {
                $scope.ngModel.selectedData = item;
                //console.log($scope.ngModel.selectedData.created);
                //console.log(JSON.stringify($scope.ngModel.selectedData.created));
            };

            $scope.onBlurred = function($index) {
            };

            $scope.onSelected = function(item, $index, $event) {
                $scope.update({item:item, $index:$index});
                
                /*$timeout(function(){
                    //focusController.focus($('#file-item-0'));
                    focusController.focus($('.sample-button'));
                }, 1000);*/
            };
        } 
    };
}]);