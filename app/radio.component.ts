import {Component} from '@angular/core';

@Component({
    selector: 'radio',
    template: `
        <h1>Radio</h1>
        <p>
            <label [class.selected]="r1.checked">
                <input name="r" value="one" #r1 type="radio" (change)="logRadio(r1)"> One
            </label>
            <label [class.selected]="r2.checked">
                <input name="r" value="two" #r2 type="radio" (change)="logRadio(r2)"> Two
            </label>
            <label [class.selected]="r3.checked">
                <input name="r" value="three" #r3 type="radio" (change)="logRadio(r3)"> Three
            </label>
        </p>
        
        <h2>Log</h2>
        <p><button (click)="clearLog()">clear</button></p>
        <pre>{{log}}</pre>`,
    styles: ['.selected {color: ForestGreen;}']
})
export class RadioComponent {

    private log: string ='';

    private logRadio(element: HTMLInputElement): void {
        this.log += `Radio ${element.value} was selected\n`
    }

    private clearLog() {
        this.log = '';
    }

}