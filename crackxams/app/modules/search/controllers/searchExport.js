'use strict';

var app = angular.module('searchApp');

app.controller('searchExport', function($scope, $modalInstance,data) {

    $scope.data1 = data;
	$scope.abort=function(){
	 $modalInstance.dismiss('cancel');
	};
    $scope.exportdata = function() {
        $modalInstance.dismiss('cancel');
		JSONToCSVConvertor(data, "Search",true);
    };
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
        
          
        
        
        //append Label row with line break
        CSV += row + '\r\n';
     }
   
    //1st loop is to extract each row
    
    for (var i = 0; i < arrData.length; i++) {
         var row = "";
       
        //2nd loop will extract each column and convert it in string comma-seprated
        
         for (var index in arrData[i]) {
          
            /*if(index==="statement.actor"){
				row += '"' + arrData[i][index]["name"] +'( '+arrData[i][index]["account"]["name"]+' on '+arrData[i][index]["account"]["homePage"]+')'+ '",';
			} 
			if(index==="statement.object.definition"){
				row += '"' + arrData[i][index]["name"] +'(type'+arrData[i][index]["type"]+')'+ '",';
			}  
            if(index != "_id"  &&index !="statement.actor.account.name"&&index !="statement.actor.account.homePage" &&index !="statement.object.definition.type"){
                     
          // row += '"' + arrData[i][index]["actor"]["name"] + '",'+'"' + arrData[i][index]["verb"]["display"]["en-US"]+ '",'+'"' + arrData[i][index]["context"]["platform"] + '",'+'"' + arrData[i][index]["object"]["definition"]["name"]["en-US"]+ '",'+'"' + arrData[i][index]["timestamp"]+ '",';
			 row += '"' + arrData[i][index]["verb"]["display"]["en-US"]+ '",'+'"' + arrData[i][index]["context"]["platform"] + '",'+'"' + arrData[i][index]["object"]["definition"]["name"]["en-US"]+ '",'+'"' + arrData[i][index]["timestamp"]+ '",';
			   
                }*/
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
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
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

});
