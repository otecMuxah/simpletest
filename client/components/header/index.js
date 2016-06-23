import angular from 'angular';
import uirouter from 'angular-ui-router';
import './header.scss';

import Component from './header.component';

export default angular.module('test.header', [uirouter])
  .component(Component.UID, new Component)
  .name;
