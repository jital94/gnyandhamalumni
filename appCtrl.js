'use strict';

app.controller('AppCtrl', function ($scope,$rootScope) 
{
    $scope.loadSettings = function()
    {
      $.getJSON("settings.json", function(json) 
      {
        $rootScope.SETTINGS=json;
        $scope.$apply();
        console.log($rootScope.SETTINGS);
      });
    };
});

