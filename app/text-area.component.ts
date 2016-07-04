import {Component} from '@angular/core';

@Component({
    selector: 'text-area',
    template: `
        <h1>Text Area</h1>
        
        <h3>textarea</h3>
        <p>
            <textarea #textarea name="text-area" cols="30" rows="5"></textarea>
        </p>
        <p>
            <button (click)="logText(textarea.value)">Update Log</button>
        </p>
        
        <h2>Log</h2>
        <p><button (click)="clearLog()">clear</button></p>
        <pre>{{log}}</pre>`
})
export class TextAreaComponent {

    private log: string ='';
    private textValue = "text box";

    private logText(value: string): void {
        this.log += `Text changed to '${value}'\n`
    }

    private clearLog() {
        this.log = '';
    }

}