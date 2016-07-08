import {Component} from '@angular/core';

@Component({
    selector: 'checkbox',
    template: `
        <h1>Checkbox</h1>
        <p>
            <label [class.selected]="cb1.checked">
                <input #cb1 type="checkbox" value="one" (change)="logCheckbox(cb1)"> One
            </label>
            <label [class.selected]="cb2.checked">
                <input #cb2 type="checkbox" value="two" (change)="logCheckbox(cb2)"> Two
            </label>
            <label [class.selected]="cb3.checked">
                <input #cb3 type="checkbox" value="three" (change)="logCheckbox(cb3)"> Three
            </label>
        </p>
        
        <h2>Log <button (click)="log=''">Clear</button></h2>
        <pre>{{log}}</pre>`,
    styles: ['.selected {color: OrangeRed;}']
})
export class CheckboxComponent {

    private log: string ='';

    private logCheckbox(element: HTMLInputElement): void {
        this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`
    }
}