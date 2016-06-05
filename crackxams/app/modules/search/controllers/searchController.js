'use strict';

var app = angular.module('searchApp');


app.controller('SearchController',['$modal', '$scope', '$filter', 'SearchService', 'ActorService', 'ActivityService','EXPORT_LIMIT',
    function($modal, $scope, $filter, SearchService, ActorService, ActivityService,EXPORT_LIMIT) {

	$scope.selected=4;
	$scope.exportLimit=10000;
        var defaultValues = SearchService.getDefaultValues();
        $scope.actors = [];
        $scope.activities = [];
        $scope.verbs = defaultValues.verbs;
        $scope.platforms = defaultValues.platforms;
        $scope.when = {"from": "", "to": ""};

        $scope.curPage = 1;
        $scope.numberOfResultsPerPage = 10;
        $scope.searchCriteria = {"actors": [], "verbs": [], "platforms": [], "activities": [], "when": {} , "date": {"from": "", "to": ""}};
        $scope.actorArrayUpperCase = [];
        $scope.activityArrayUpperCase = [];

        $scope.autopopulateActor = function(actorToAdd) {
            if(actorToAdd.length>=3) {
                ActorService.getActorArray(actorToAdd,function(data) {
                $scope.actorArray = data;
                angular.forEach(data, function(value, key) { 
                        var actorName = angular.uppercase(value);                         
                        $scope.actorArrayUpperCase.push(actorName);                    
                    }, $scope.actorArrayUpperCase);                
                });
            }
			if(actorToAdd.length<3){
            $scope.actorArray = '';
		}
        }
		$scope.autopopulateActivity = function(activityToAdd) {
        if(activityToAdd.length>=3){
        ActivityService.getCourseArray(activityToAdd,function(data) {
            $scope.courseArray = data;
            angular.forEach(data, function(value, key) { 
                        var activityName = angular.uppercase(value);                         
                        $scope.activityArrayUpperCase.push(activityName);                    
                    }, $scope.activityArrayUpperCase);                
                
            });
        }
		if(activityToAdd.length<3){
            $scope.courseArray = '';
		}
        }
        $scope.errorMsg = function(err) {
                            var modalInstance = $modal.open({
                            templateUrl: 'myModalContent.html',    
                            controller: 'errorController',                        
                            size: 'sm',
                            resolve: {
                                errorMessage: function() {
                                    return err;
                                }
                            }                          
                        });
                    }
        
        $scope.addActor = function(actorToAdd) {
		//actorToAdd=actorToAdd.toUpperCase();
        if (!actorToAdd){
            $scope.errorMsg("Enter atleast 3 characters and select from the available actors !");
            return;  
        }
	   if ( $scope.actorArrayUpperCase.indexOf(angular.uppercase(actorToAdd)) == -1){
            $scope.errorMsg("No matching actor found!");
            return;  
        }  
	    var count=0;
        if($scope.actors.length === 0 ){if (actorToAdd) {
              $scope.actors.push({ name: actorToAdd });
          }}
        for(var i=0;i < $scope.actors.length;i++){
          if (actorToAdd.toUpperCase() != $scope.actors[i].name.toUpperCase()) {
      
             count++;
          }
         } 
 
        if(count == $scope.actors.length){$scope.actors.push({ name: actorToAdd });}

        }

        $scope.deleteActor = function(actorToDelete) {
            for (var i = 0; i < $scope.actors.length; i++) {
              
                if ($scope.actors[i].name == actorToDelete) {
                   
                    $scope.actors.splice(i, 1);
                }
            }
        }

        $scope.addActivity = function(activityToAdd) {
		//activityToAdd=activityToAdd.toUpperCase();
        if (!activityToAdd){
            $scope.errorMsg("Enter atleast 3 characters and select from the available activities !");
            return;  
        }
        if ($scope.activityArrayUpperCase.indexOf(angular.uppercase(activityToAdd)) == -1){
            $scope.errorMsg("No matching activity found!");
            return;  
        }
        
        var count=0;
        if($scope.activities.length === 0 ){if (activityToAdd) {
              $scope.activities.push({ name: activityToAdd });
          }}
        for(var i=0;i < $scope.activities.length;i++){
          if (activityToAdd.toUpperCase() != $scope.activities[i].name.toUpperCase()) {
      
             count++;
          }
         } 
         if(count == $scope.activities.length){$scope.activities.push({ name: activityToAdd });}

        }

        $scope.deleteActivity = function(activityToDelete) {
            for (var i = 0; i < $scope.activities.length; i++) {
                if ($scope.activities[i].name === activityToDelete) {
                    $scope.activities.splice(i, 1);
                }
            }
        }
        
        

        $scope.search = function() {
	    $scope.displaySpinner="true";
            $scope.searchCriteria.actors = $scope.actors;
            $scope.searchCriteria.verbs = $scope.verbs;
            $scope.searchCriteria.platforms = $scope.platforms;
            $scope.searchCriteria.activities = $scope.activities;
            $scope.searchCriteria.date = {"from": "", "to": ""};
            if ($scope.when.from) {
                $scope.searchCriteria.date.from = $filter('date')(new Date($scope.when.from), 'yyyy-MM-dd');;    
            }
            
            if ($scope.when.to) {
                $scope.searchCriteria.date.to = $filter('date')(new Date($scope.when.to), 'yyyy-MM-dd');;
            }
            
            $scope.curPage = 1;
            $scope.message = "";
            $scope.searchResults =''; // To clear the previous result

            SearchService.getSearchResults($scope.curPage, $scope.numberOfResultsPerPage, $scope.searchCriteria, function(data, status) {
                if (status == '401') {
                    $scope.error = "Unauthorized";
                } else if (status == '200') {
                    
                    $scope.searchResults = data;
                    $scope.searchdata = data.details;
  
                    if($scope.searchResults.totaldata == 0) {
                        $scope.message = "No records found!";
                    }                    
                    $scope.numberOfPages = Math.ceil($scope.searchResults.totaldata / $scope.numberOfResultsPerPage);
                }
				$scope.displaySpinner="false";
            });
        }

        $scope.nextPage = function() {            
			$scope.displaySpinner="true";
            $scope.curPage++;            
            $scope.message = "";
            SearchService.getSearchResults($scope.curPage, $scope.numberOfResultsPerPage, $scope.searchCriteria, function(data, status) {
                if (status == '401') {
                    $scope.error = "Unauthorized";
                } else if (status == '200') {                    
                    $scope.searchResults = data;
                     $scope.searchdata = data.details;
                    if($scope.searchResults.totaldata == 0) {
                        $scope.message = "No records found!";
                    }
                    $scope.numberOfPages = Math.ceil($scope.searchResults.totaldata / $scope.numberOfResultsPerPage);
                }
				$scope.displaySpinner="false";
            });
        }

        $scope.prevPage = function() {
			$scope.displaySpinner="true";
            $scope.curPage--;            
            $scope.message = "";
            SearchService.getSearchResults($scope.curPage, $scope.numberOfResultsPerPage, $scope.searchCriteria, function(data, status) {
                if (status == '401') {
                    $scope.error = "Unauthorized";
                } else if (status == '200') {
                    
                    $scope.searchResults = data;
                     $scope.searchdata = data.details;
                    if($scope.searchResults.totaldata == 0) {
                        $scope.message = "No search found!";
                    }
                    $scope.numberOfPages = Math.ceil($scope.searchResults.totaldata / $scope.numberOfResultsPerPage);
                }
				$scope.displaySpinner="false";
            });
        }
		
       $(document).ready(function(){
    $('#excel').click(function(){		
			$scope.searchCriteria.actors = $scope.actors;
            $scope.searchCriteria.verbs = $scope.verbs;
            $scope.searchCriteria.platforms = $scope.platforms;
            $scope.searchCriteria.activities = $scope.activities;
            $scope.searchCriteria.when = $scope.when;
			if ($scope.searchResults.totaldata > EXPORT_LIMIT.searchExportLimit) {
						
						var modalInstance = $modal.open({
                            templateUrl: 'dataDownloadWarning.html',    
							size: 'sm',
                            resolve: {
                                data: function() {
                                  
                                }
                            }                          
                        }); 
				}else{
            SearchService.getSearchResults(1, 0, $scope.searchCriteria, function(data, status) {
				if (status == '200') {
                $scope.data1=angular.toJson(data);
				JSONToCSVConvertor($scope.data1, "Search",true);
					   
						
					}
			
            });
			}
		
    });
});

function JSONToCSVConvertor(JSONData1,ReportTitle,ShowLabel) {
  
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData1 != 'object' ? JSON.parse(JSONData1) : JSONData1;
        var CSV = '';    
    //Set Report title in first row or line
    
    CSV +="***************"+ ReportTitle +"****************"+'\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
           //if(index != "_id" &&index !="statement.actor.account.name"&&index !="statement.actor.account.homePage" &&index !="statement.object.definition.type"){
            if(index==="statement"){
			//Now convert each value to string and comma-seprated
			row += "Actor ID" + '\t'+"Verbs"+'\t'+"Platform"+'\t'+"Activity ID"+'\t'+"Date"+'\t';
           }
		         }
        CSV += row + '\r\n';
     }
   
    //1st loop is to extract each row
    
    for (var i = 0; i < arrData.length; i++) {
         var row = "";
       
        //2nd loop will extract each column and convert it in string comma-seprated
        
         for (var index in arrData[i]) {
			if(index==="statement"){
			row += arrData[i][index]["actor"]["name"] +'( '+arrData[i][index]["actor"]["account"]["name"]+' on '+arrData[i][index]["actor"]["account"]["homePage"]+')'+ '\t'+ arrData[i][index]["verb"]["display"]["en-US"]+ '\t'+ arrData[i][index]["context"]["platform"] + '\t'+ arrData[i][index]["object"]["definition"]["name"]["en-US"]+'(type '+arrData[i][index]["object"]["definition"]["type"]+')'+'\t'+ arrData[i][index]["timestamp"]+'\t';
			 
			}	

                    }

           //add a line break after each row
        CSV += row + '\r\n';
                } 
    
    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    //Initialize file format you want csv or xls
    var uri = 'data:text/xls;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".xls";
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


    }]);

