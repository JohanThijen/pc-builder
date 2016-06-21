'use strict';

// libs
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// init modules
import Controllers from './controllers';
import Services from './services';
import Factories from './factories';
import Configs from './config';

// koppel modules aan app
const App = angular.module('app', [
	uiRouter,
	Services.name,
	Factories.name,
	Configs.name,
	Controllers.name]
);

export default App;
