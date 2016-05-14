'use strict';

app.controller('MainCtrl', function ($scope,$rootScope) 
{
  
  $scope.sortKey = 'Name';
  $scope.reverse = false;

  // http://plnkr.co/edit/Mlca2gXvXNVAXEsNbpCI?p=preview 
  // custom filter on LOCAL_SETTINGS.searchInKeys
  var customFilterFn = function (searchText) {
    function comparator(a, b) {
      return (''+a).toLowerCase().indexOf((''+b).toLowerCase()) > -1;
    }
    
    var lookInKeys = $scope.LOCAL_SETTINGS.searchInKeys;

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

  function loadStudentInfo(data, tabletop) 
  {
    $rootScope.showLoad=false; 
    // by default don't show the load gif
    // when load gif is displayed, we dont want to display the search box

    // default profile picture for people
    for (var key in data) 
    {
      if (!data[key].Link_To_Profile_Image)
        data[key].Link_To_Profile_Image="database/IDpics/"+data[key].Roll_No+".jpg"
    }
    $rootScope.studentData=data;
    $scope.$apply();
  };

  $scope.initSpreadSheet = function()
  {
     Tabletop.init( { key: $scope.LOCAL_SETTINGS.spreadsheetLink,
                     callback: loadStudentInfo,
                     simpleSheet: true } );
    
  };

  $scope.sort = function(keyname){
    $scope.sortKey = keyname;
    $scope.reverse = !$scope.reverse;
  }

  $scope.loadData = function ()
  {
    if (!$rootScope.studentData)
    {
      $rootScope.showLoad=true;
      // we load the settings twice once in mainCtrl and appCtrl to prevent race conditions
      // in which the controller is loaded. This can be corrected later
      $.getJSON("settings.json", function(json) 
        {
          $scope.LOCAL_SETTINGS=json;
          $scope.customFilter=customFilterFn;
          // filter is set now since filter requires the LOCAL_SETTINGS.searchInKeys 
          // to be set
          $scope.$apply();
          $scope.initSpreadSheet();
        });
    } 
  };
});
