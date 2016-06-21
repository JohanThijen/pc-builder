'use-strict';

export default ($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// standaard state/route
		.state('index', {
			url: '/home',
			templateUrl: 'templates/main.html',
		})

		// state/route voor de builder
		.state('builder', {
			url: '/builder/:type',
			controller: 'MainCtrl',
			templateUrl: 'templates/builder.html',
			resolve: {

				// inject de categorieen in de controller
				categories: function(productFactory){
					let categories = productFactory.getCategories();
					return categories;
				},

				// inject de items in de controller als er een categorie
				// in de url zit
				items: function(productFactory, $stateParams, $location){
					if ($stateParams.type) {

						let items;

						// haal de juiste items op
						switch($stateParams.type) {
						    case 'cpu':
						        items = productFactory.getCPUs()
						        break;
						    case 'mobo':
						        items = productFactory.getMotherboards()
						        break;
						    case 'gfx':
						        items = productFactory.getGraphicscards()
						        break;
						    case 'ram':
						        items = productFactory.getRAM()
						        break;
						    case 'hdd':
						        items = productFactory.getHarddisks()
						        break;
						    case 'psu':
						        items = productFactory.getPowerSupplies()
						        break;
					        case 'case':
					            items = productFactory.getCases()
					            break; 
						    default:
						        items = null
						        // als er een foute categorie is genoemd, redirect naar
						        // de default builder state
						        $location.url('/builder/')
						}
						return items;
					};
				}
			}
		})

		// laatste pagina
		.state('finished', {
			url: '/finished',
			templateUrl: 'templates/finished.html',
			controller: 'FinishedCtrl',
			resolve : {

				// als de pc nog niet compleet is, terug naar de builder
				checkComplete: function(shoppingCartService, $location){
					if (shoppingCartService.checkComplete() == false) {
						alert('Your PC is not complete yet!')
						$location.url('/builder/')
					};
				}
			}
		})
};
