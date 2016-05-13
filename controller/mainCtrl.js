'use strict';

app.controller('MainCtrl', function ($scope,$rootScope) 
{
  $scope.data=[];
  // var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';  
  function showInfo(data, tabletop) 
  {
    alert("Successfully processed!");
    console.log(data);
    for (var key in data) 
    {
      if (!data[key].Link_To_Profile_Image)
        data[key].Link_To_Profile_Image="database/IDpics/"+data[key].Roll_No+".jpg"
    }
    $scope.data=data;
    $scope.$apply();
  }

  $scope.loadData = function ()
  {
    console.log($rootScope.SETTINGS.spreadsheetLink);
    while(!$rootScope.SETTINGS.spreadsheetLink)
    {
      ;
    }

    Tabletop.init( { key: $rootScope.SETTINGS.spreadsheetLink,
                     callback: showInfo,
                     simpleSheet: true } )
    

    
  };
});


// $scope.loadSpreadShhet = function ()
  // {
  //   // Tabletop.init( { key: public_spreadsheet_url,
  //   //                callback: showInfo,
  //   //                wanted: [ "Cats", "Courses" ],
  //   //                debug: true } );
  //   Tabletop.init( { key: '0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE',
  //                  callback: showInfo,
  //                  simpleSheet: true 
  //                } )
  // }