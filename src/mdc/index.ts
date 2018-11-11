import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./mdc-ripple"),
    PLATFORM.moduleName("./linear-progress/mdc-linear-progress"),
    PLATFORM.moduleName("./slider/mdc-slider"),
    PLATFORM.moduleName("./switch/mdc-switch"),
    PLATFORM.moduleName("./text-field/mdc-text-field"),
    PLATFORM.moduleName("./select/mdc-select"),
    PLATFORM.moduleName("./text-field/text-field-input-value-converter")
  ]);
}
