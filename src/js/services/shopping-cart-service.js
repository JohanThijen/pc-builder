'use-strict';

export default () => {

	let selectedItems = [];
	let complete = false;

	// functie om items aan lijstje toe te voegen
	let addItem = function(item){

		let catPos = checkArray("category", item.category);
		let idPos = checkArray("id", item.id)

		// kijken of er al een item met zelfde categorie en/of id in de winkelmand zit

		if (catPos === null && idPos === null) {
			selectedItems.push(item)
		}
		else if (idPos === null && catPos !== null){
			removeItem(catPos)
			selectedItems.push(item)
		}
		else{
			removeItem(idPos)
		}
	};

	// functie om item uit lijst te verwijderen
	let removeItem = function(index){
		selectedItems.splice(index, 1)
	};

	// functie om lijst op te halen
	let listItems = function(){
		return selectedItems;
	};

	// functie om totaalprijs op te vragen
	let getTotalPrice = function(){
		let totalPrice = 0;

		for (let i of selectedItems){
			totalPrice += i.price
		}

		return totalPrice;
	};

	// kijken of pc compleet is
	let checkComplete = function(){
		if (selectedItems.length == 7) {
			return true
		}
		return false
	};

	// mandje leegmaken
	let clearCart = function(){
		selectedItems = []
	};

	// functie om te kijken of iets al in de winkelmand zit
	let checkArray = function(key, val) {
		for (let i in selectedItems){
			if (selectedItems[i][key] == val) {
				return i
			}
		}
		return null;
	};


	return {
		addItem : addItem,
		listItems : listItems,
		getTotalPrice: getTotalPrice,
		checkComplete : checkComplete,
		clearCart: clearCart
	};
};
