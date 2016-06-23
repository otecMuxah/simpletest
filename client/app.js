import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import AppController from './app.controller';

import HeaderComponent from './components/header'
import Admin from './components/admin'

const dependencies = [uirouter, HeaderComponent, Admin];

export default angular.module('test', dependencies)
  .config(['$httpProvider', $httpProvider => {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  }])
  .controller(AppController.UID(), AppController)
  .name;
