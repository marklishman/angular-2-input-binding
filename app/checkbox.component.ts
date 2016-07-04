import {Component} from '@angular/core';

@Component({
    selector: 'checkbox',
    template: `
        <h1>Checkbox</h1>
        <p>
            <label [class.selected]="cb1.checked">
                <input value="one" #cb1 type="checkbox" (change)="logCheckbox(cb1)"> One
            </label>
            <label [class.selected]="cb2.checked">
                <input value="two" #cb2 type="checkbox" (change)="logCheckbox(cb2)"> Two
            </label>
            <label [class.selected]="cb3.checked">
                <input value="three" #cb3 type="checkbox" (change)="logCheckbox(cb3)"> Three
            </label>
        </p>
        
        <h2>Log</h2>
        <p><button (click)="clearLog()">clear</button></p>
        <pre>{{log}}</pre>`,
    styles: ['.selected {color: ForestGreen;}']
})
export class CheckboxComponent {

    private log: string ='';

    private logCheckbox(element: HTMLInputElement): void {
        this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`
    }

    private clearLog() {
        this.log = '';
    }

}