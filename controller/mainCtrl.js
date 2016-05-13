'use strict';

app.controller('MainCtrl', function ($scope,$rootScope) 
{
  if (!$rootScope.studentData)
  {
    $rootScope.showLoad=true;
  }
  function showInfo(data, tabletop) 
  {
    $rootScope.showLoad=false;
    for (var key in data) 
    {
      if (!data[key].Link_To_Profile_Image)
        data[key].Link_To_Profile_Image="database/IDpics/"+data[key].Roll_No+".jpg"
    }
    $rootScope.studentData=data;
    $scope.$apply();
  }
  $scope.initSpreadSheet = function()
  {
     Tabletop.init( { key: $rootScope.SETTINGS.spreadsheetLink,
                     callback: showInfo,
                     simpleSheet: true } );
    

  }
  $scope.loadData = function ()
  {
    if (!$rootScope.studentData)
    {
      $.getJSON("settings.json", function(json) 
        {
          $rootScope.SETTINGS=json;
          $scope.$apply();
          $scope.initSpreadSheet();
        });
    } 
}
});
