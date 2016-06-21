'use-strict';

// libs
import angular from 'angular';
// init factory
import productFactory from './product-factory';

// koppel factory aan app

const module = angular.module('app.factories', [])
  .factory('productFactory', productFactory);

export default module;
