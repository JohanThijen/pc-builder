'use-strict';

export default ($scope, categories, items, $stateParams, shoppingCartService, $rootScope) => {
	$scope.categories = categories
	$scope.items = items
	$scope.selectedItems = shoppingCartService.listItems()
	$scope.stateParams = $stateParams;
	$scope.totalPrice = shoppingCartService.getTotalPrice();
	$scope.complete = shoppingCartService.checkComplete();
};
