import { InputItemCtrl } from './input-item.controller'
import InputItemTemplate from './input-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class InputItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = InputItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = InputItemCtrl
    this.controllerAs = 'Input'
    this.bindToController = true
  }

  static directiveFactory() {
    InputItem.instance = new InputItem()
    return InputItem.instance
  }
}

export { InputItem }
