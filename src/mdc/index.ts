import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./mdc-ripple"),
    PLATFORM.moduleName("./text-field/mdc-text-field"),
    PLATFORM.moduleName("./slider/mdc-slider")
  ]);
}
