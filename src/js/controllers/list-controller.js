'use-strict';

export default ($scope, shoppingCartService) => {

	// op het moment dat er een event wordt gebroadcast
	// wordt de totaalprijs opnieuw berekend
	$scope.$on('calcPrice', function(event) {
		$scope.totalPrice = shoppingCartService.getTotalPrice();	
		$scope.complete = shoppingCartService.checkComplete();
	});
};
