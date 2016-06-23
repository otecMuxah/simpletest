import controller from './admin.controller'

/**
 * Routing function for sample
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state("admin", {
      url: "/admin",
      template: require("./admin.html"),
      controller: controller,
      controllerAs: "admin"
    });
}
