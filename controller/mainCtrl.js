'use strict';

app.controller('MainCtrl', function ($scope) 
{
  $scope.data=[];
  $scope.loadData = function ()
  {
      $.getJSON("database/cse.json", function(json) {
        $scope.data=json;
        console.log(json); // this will show the info it in firebug console
        $scope.$apply();
    });

  };
});
