angular
.module('anyPlane')
.controller('SabreCtrl', SabreController)

function SabreController ($scope) {
  console.log('sabre!');
};

function getUrl ($scope) {
  //store the values
  var origin = $scope.origin;
  var theme = $scope.theme;
  var fare = $scope.fare;
  var stay = $scope.stay;
  var startDate = $scope.date;
  //clear the inputs
  $scope.origin = null;
  $scope.theme = null;
  $scope.fare = null;
  $scope.stay = null;
  $scope.date = null;

  var sabreUrl = 'https://api.text.sabre.com/vi/shop/flights/fares?origin=' + origin
                  + '&earliestdeparturedate=' + startDate
                  + '&latestdeparturedate=' + startDate
                  + '&lengthofstay=' + stay
                  + '&theme=' + theme
                  + '&maxfare=' + fare
                  + '&pointofsalecountry=US&topdestinations=50';


  access token Shared/IDL:IceSess\/SessMgr:1\.0.IDL/Common/!ICESMS\/ACPCRTD!ICESMSLB\/CRT.LB!-3555685385332533852!1802243!0!!E2E-1
}
