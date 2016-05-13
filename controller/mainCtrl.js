'use strict';

app.controller('MainCtrl', function ($scope,$rootScope) 
{
  $scope.order_item="Name";
  $scope.order_reverse=false;

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

  // http://plnkr.co/edit/Mlca2gXvXNVAXEsNbpCI?p=preview
  $scope.customFilter = function (searchText) {
    function comparator(a, b) {
      return (''+a).toLowerCase().indexOf((''+b).toLowerCase()) > -1;
    }
    
    var lookInKeys = ['Name', 'Position', 'Organization', 'Location', 'History_and_brief_bio'];
    
    return function (item) {
      if (!searchText) {
        return true; // no filter
      }
      
      for (var i = 0; i < lookInKeys.length; i++) {
        var key = lookInKeys[i];
        if (comparator(item[key], searchText)) {
          return true; // if any key is match, return true
        }
      }
      
      return false; // none of keys are match
    };
  };

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
