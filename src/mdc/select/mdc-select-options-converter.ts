import { MdcSelectBindOption } from './mdc-select-bind-option';

export class MdcSelectOptionsValueConverter {
  toView(options: any[], withData: boolean): MdcSelectBindOption[] {
    if (options == undefined || options == null) return [];

    withData = withData ?? false;
    const retval: MdcSelectBindOption[] = [];

    let index = 0;
    for (let c = 0; c < options.length;) {
      if (!withData) {
        retval.push({
          index: index++,
          value: options[c].toString(),
          dataValue: options[c]
        });
        c++;
      }
      else {
        retval.push({
          index: index++,
          value: options[c].toString(),
          dataValue: options[c+1]
        });
        c+=2;
      }
    }

    return retval;
  }
}
