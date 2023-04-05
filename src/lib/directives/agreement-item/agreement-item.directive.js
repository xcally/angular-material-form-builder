import { AgreementItemCtrl } from './agreement-item.controller'
// import AgreementItemTemplate from './agreement-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class AgreementItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.scope = {
      item: '=',
    }
    this.controller = AgreementItemCtrl
    this.controllerAs = 'Agreement'
    this.bindToController = true
  }

  static directiveFactory() {
    AgreementItem.instance = new AgreementItem()
    return AgreementItem.instance
  }
}

export { AgreementItem }
