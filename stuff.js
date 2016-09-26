var app = angular.module('searchWikipedia', []);

//var entries = [];

app.controller('wikiSearch', function($scope, $http){
    $scope.entries;
    console.log("level 1");
    
  //   linked to ng-click (will run when clicked)
    $scope.sendQuery = function (query){
        
         //query wikipedia API for text in search field
          
            $http.get("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=" + $scope.query)
    .then(function(response){
        console.log(response);
        //sort response into an array filled with objects
        console.log("level 3");
        
        $scope.entries = response['data']['query']['pages'];
        
        console.log($scope.entries);
                
        //hide search box div
        
        
        
        //reveal search results div
        
        
    }); //end of get=>then function
        
        
        
    
    } //end of sendquery function
    
    
    
    
    
    
    
    
    
    
   
}); //end of controller
