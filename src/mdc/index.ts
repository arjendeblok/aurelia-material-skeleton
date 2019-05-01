import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./mdc-ripple"),
    PLATFORM.moduleName("./mdc-validation-errors"),
    PLATFORM.moduleName("./drawer/mdc-drawer"),
    PLATFORM.moduleName("./linear-progress/mdc-linear-progress"),
    PLATFORM.moduleName("./slider/mdc-slider"),
    PLATFORM.moduleName("./switch/mdc-switch"),
    PLATFORM.moduleName("./text-field/mdc-text-field"),
    PLATFORM.moduleName("./select/mdc-select"),
    PLATFORM.moduleName("./top-app-bar/mdc-top-app-bar"),
    PLATFORM.moduleName("./tab-bar/mdc-tab-bar"),
    PLATFORM.moduleName("./tab-scroller/mdc-tab-scroller"),
    PLATFORM.moduleName("./tab/mdc-tab"),
    PLATFORM.moduleName("./text-field/text-field-input-value-converter"),
    PLATFORM.moduleName("./radio/mdc-radio"),
    PLATFORM.moduleName("./checkbox/mdc-checkbox"),
  ]);
}
