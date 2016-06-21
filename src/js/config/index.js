'use-strict';

// libs
import angular from 'angular';
// import routing
import Router from './router.js';

// router aan module koppelen
const module = angular.module('app.config', [])
  .config(Router);

export default module;
