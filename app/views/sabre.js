angular
.module('anyPlane')
.controller('SabreCtrl', SabreController)

function SabreController ($scope, $http) {
  $scope.getTripData = function () {
    $http(getReq($scope))
    .success(function(data){
      console.log('success with payload: ', data);
    })
    .error(function(data){
      console.log('error retrieving data', data);
    })
  }
};

function createResults (obj) {
  var fares = obj.FareInfo
  console.log(fares);
}

function getUrl ($scope) {
  //store the values
  var origin = $scope.origin;
  var theme = $scope.theme;
  var fare = ($scope.fare * 1);
  var stay = ($scope.stay * 1);
  var startDate = $scope.date;
  //clear the inputs
  $scope.origin = null;
  $scope.theme = null;
  $scope.fare = null;
  $scope.stay = null;
  $scope.date = null;

  var sabreUrl = 'https://api.test.sabre.com/v1/shop/flights/fares?origin=' + origin
                  + '&earliestdeparturedate=' + startDate
                  + '&latestdeparturedate=' + startDate
                  + '&lengthofstay=' + stay
                  + '&theme=' + theme
                  + '&maxfare=' + fare
                  + '&pointofsalecountry=US&topdestinations=50';

  return sabreUrl;
}

function getReq ($scope) {
  var token = 'Shared/IDL:IceSess\/SessMgr:1\.0.IDL/Common/!ICESMS\/CERTG!ICESMSLB\/CRT.LB!-3555632266113144284!1197302!0!!E2E-1';
  console.log(getUrl($scope));
  var req = {
    method: 'GET',
    url: 'https://api.test.sabre.com/v1/shop/flights/fares?origin=ATL&earliestdeparturedate=2015-04-05&latestdeparturedate=2015-04-10&lengthofstay=2&theme=BEACH&maxfare=1000&pointofsalecountry=US&topdestinations=50',
    headers: {
      'Authorization': 'Bearer' + token
    }
  }

  return req;
};
