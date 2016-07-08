import {Component} from '@angular/core';

@Component({
    selector: 'radio',
    template: `
        <h1>Radio</h1>
        <p>
            <label [class.selected]="r1.checked">
                <input #r1 type="radio" name="r" value="one" (change)="logRadio(r1)"> One
            </label>
            <label [class.selected]="r2.checked">
                <input #r2 type="radio" name="r" value="two" (change)="logRadio(r2)"> Two
            </label>
            <label [class.selected]="r3.checked">
                <input #r3 type="radio" name="r" value="three" (change)="logRadio(r3)"> Three
            </label>
        </p>
        
        <h2>Log <button (click)="log=''">Clear</button></h2>
        <pre>{{log}}</pre>`,
    styles: ['.selected {color: OrangeRed;}']
})
export class RadioComponent {

    private log: string ='';

    private logRadio(element: HTMLInputElement): void {
        this.log += `Radio ${element.value} was selected\n`
    }
}