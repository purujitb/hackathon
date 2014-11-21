'use strict';

google.load('visualization', '1', {
  packages: ['corechart']
});
/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('BatchesCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

phonecatControllers.controller('ReportsCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
	  $scope.batchFailedData = [
	  	{
	  		Batch: {name: '200000000015',
	  			numFailed: '40',
	  			contentSet: 'USCODE',
	  			date: '2014/09/07',
	  			vendor: 'Datastream'
	  		}
	  	},
	  	{
	  		Batch: {
	  			name: '200000000016',
	  			numFailed: '30',
	  			contentSet: 'USCODE',
	  			date: '2014/09/08',
	  			vendor: 'Datastream'
	  		}
	  	}
	  	,
	  	{
	  		Batch: {
	  			name: '200000000019',
	  			numFailed: '35',
	  			contentSet: 'USCODE',
	  			date: '2014/09/08',
	  			vendor: 'Datastream'
	  		}
	  	},
	  	{
	  		Batch: {
	  			name: '200000000020',
	  			numFailed: '20',
	  			contentSet: 'USCODE',
	  			date: '2014/09/09',
	  			vendor: 'Datastream'
	  		}
	  	},
	  		{
	  		Batch: {
	  			name: '200000000022',
	  			numFailed: '15',
	  			contentSet: 'USCODE',
	  			date: '2014/09/10',
	  			vendor: 'Datastream'
	  		}
	  	},
	  		{
	  		Batch: {
	  			name: '200000000016',
	  			numFailed: '40',
	  			contentSet: 'USCODE',
	  			date: '2014/09/11',
	  			vendor: 'Datastream'
	  		}
	  	},
	  		{
	  		Batch: {
	  			name: '200000000016',
	  			numFailed: '42',
	  			contentSet: 'USCODE',
	  			date: '2014/09/12',
	  			vendor: 'Datastream'
	  		}
	  	}
	  	];

	  	var arrayToDisplay = [];
	  	arrayToDisplay.push(["Date", "Failed"]);
	  	console.log(arrayToDisplay);
	  	var length = $scope.batchFailedData.length;
	  	for (var i=0; i<length; i++) {
	  		var batch = $scope.batchFailedData[i];
	  		var arrayEntry = [batch.Batch.date, parseInt(batch.Batch.numFailed)];
	  		arrayToDisplay.push(arrayEntry);
	  	}
	  	console.log(arrayToDisplay);

	        var options = {
	          title: 'Batch Failed'
	        };
			
			var dataToDisplay = google.visualization.arrayToDataTable(arrayToDisplay);

			  	var chart = new google.visualization.ColumnChart(document.getElementById('chartdiv'));
			  	chart.draw(dataToDisplay, options);
  }]);