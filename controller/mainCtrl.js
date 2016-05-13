'use strict';

app.controller('MainCtrl', function ($scope) 
{
  $scope.data=[];
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';  
  
  function showInfo(data, tabletop) 
  {
    alert("Successfully processed!")
    console.log(data);
    $scope.data=data;
    $scope.$apply();
  }

  $scope.loadData = function ()
  {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )

    //   $.getJSON("database/cse.json", function(json) {
    //     $scope.data=json;
    //     console.log(json); // this will show the info it in firebug console
    //     $scope.$apply();
    // });

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