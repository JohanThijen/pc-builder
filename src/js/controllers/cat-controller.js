'use-strict';

export default ($scope) => {

	// deze functie wordt gebruikt om te kijken of er al een 
	// categorie is gekozen, als dat het geval is komt er een vinkje
	// bij de categorie te staan
	$scope.catSelected = function(cat){
		for (let i in $scope.selectedItems){
			if ($scope.selectedItems[i]["category"] == cat) {
				return true;
			}
		}
		return false;
	}
};
