'use-strict';

// libs
import angular from 'angular';
// init service
import shoppingCartService from './shopping-cart-service';


// koppel service aan app
const module = angular.module('app.services', [])
  .service('shoppingCartService', shoppingCartService);

export default module;
