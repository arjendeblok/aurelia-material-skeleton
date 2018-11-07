import { bindable, autoinject } from 'aurelia-framework';
import { MDCLinearProgress } from '@material/linear-progress/dist/mdc.linearProgress';

import './mdc-linear-progress.scss';

@autoinject()
export class MdcLinearProgress {
    private progress: MDCLinearProgress;
    @bindable id: string;
    @bindable open = true;
    @bindable determinate = true;
    @bindable value = 0.5;

    constructor(private element: Element) {
    }

    attached() {
        const progressElement = this.element.querySelector('.mdc-linear-progress');
        this.progress = new MDCLinearProgress(progressElement);

        this.progress.determinate = this.determinate;
        if (this.open) {
            this.progress.open();
        } else {
            this.progress.close();
        }
        if (this.value) {
            this.progress.progress = this.value;
        }
    }

    openChanged(value: boolean, oldvalue: boolean) {
        if (this.progress) {
            if (value) {
                this.progress.open();
            } else {
                this.progress.close();
            }
        }
    }

    determinateChanged(value: boolean, oldvalue: boolean) {
        if (this.progress) {
            this.progress.determinate = value;
        }
    }

    valueChanged(value: number, oldvalue: number) {
        if (this.progress) {
            if (value != undefined && value != null) {
                if (value >= 0 && value <= 1) {
                    this.progress.progress = value;
                }
            }
        }
    }
}