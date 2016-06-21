'use-strict';

export default ($scope, shoppingCartService, $state) => {
	$scope.items = shoppingCartService.listItems();
	$scope.totalPrice = shoppingCartService.getTotalPrice();

	$scope.restart = function(){
		shoppingCartService.clearCart()
		$state.go('builder')
	}
};
