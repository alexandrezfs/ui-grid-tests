'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('MainCtrl', function ($scope, $rootScope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.list1 = {title: 'AngularJS - Drag Me'};
        $scope.list2 = {};

        $scope.myData = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];



        $scope.gridHandlers = {

            onDblClick : function(row) {
                var url = '//google.com';
                $window.open(url, "_blank", "height=600,width=800,toolbar=no,location=no,menubar=no,titlebar=no");
            }
        }

        $scope.selectedEntity = null;

        $scope.gridOptions = {
            data: 'myData',
            appScopeProvider: {
                onDblClick : function(row) {
                    console.log(row);
                }
            },
            rowTemplate: '<div data-drag="true" ng-mousedown=\"grid.appScope.onDblClick(row)\" jqyoui-draggable data-jqyoui-options="{revert: \'invalid\', revertDuration: 0, zIndex: 9999999, scroll: false, helper: \'clone\', appendTo: \'body\', cursor:\'move\', containment: \'document\'}"><div ng-repeat="col in colContainer.renderedColumns track by col.colDef.name"  class="ui-grid-cell" ui-grid-cell></div></div>'
        }

    });
