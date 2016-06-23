export default class HeaderComponent {
  static get UID() {
    return "headerComponent";
  }

  constructor() {
    this.template = require('./header.html');
    this.restrict = 'EA';
    this.controllerAs = 'header';
  }
}
