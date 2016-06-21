'use-strict';

// libs
import angular from 'angular';
// controllers initialiseren
import AppCtrl from './app-controller';
import MainCtrl from './main-controller';
import CatCtrl from './cat-controller';
import ItemCtrl from './item-controller';
import ListCtrl from './list-controller';
import FinishedCtrl from './finished-controller';

// koppel de controllers aan de app

const module = angular.module('app.controllers', [])
  .controller('AppCtrl', AppCtrl)
  .controller('MainCtrl', MainCtrl)
  .controller('CatCtrl', CatCtrl)
  .controller('ItemCtrl', ItemCtrl)
  .controller('ListCtrl', ListCtrl)
  .controller('FinishedCtrl', FinishedCtrl);

export default module;
