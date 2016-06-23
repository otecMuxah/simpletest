import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './admin.routes';
import './admin.scss';

export default angular.module('PerkPlate.branch', [uirouter])
  .config(routes)
  .name;
