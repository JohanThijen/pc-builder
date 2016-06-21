'use-strict';

export default ($scope, shoppingCartService, $rootScope) => {

	// categorie vertalen naar iets leesbaars
	switch($scope.stateParams.type) {
	    case 'cpu':
	        $scope.currentCategory = "CPU"
	        break;
	    case 'mobo':
	        $scope.currentCategory = "Motherboard"
	        break;
	    case 'gfx':
	        $scope.currentCategory = "Graphics card"
	        break;
	    case 'ram':
	        $scope.currentCategory = "RAM"
	        break;
	    case 'hdd':
	        $scope.currentCategory = "Harddisk"
	        break;
	    case 'psu':
	        $scope.currentCategory = "Power supply"
	        break;
        case 'case':
            $scope.currentCategory = "Case"
            break; 
	    default:
	        $scope.currentCategory = null
	}

	// item toevoegen aan winkelmand
	$scope.addItem = function(item){
		shoppingCartService.addItem(item)

		// opnieuw de lijst met alle items ophalen
		$scope.selectedItems = shoppingCartService.listItems()

		// event broadcasten om aan te geven de prijs opnieuw berekend moet worden
		$rootScope.$broadcast('calcPrice');
	}

	// kijken of item geselecteerd is. wordt gebruikt om te kijken
	// of er een vinkje bij het item moet komen te staan 
	$scope.itemSelected = function(itemId){
		for (let i in $scope.selectedItems){
			if ($scope.selectedItems[i]["id"] == itemId) {
				return true;
			}
		}
		return false;
	}
};
