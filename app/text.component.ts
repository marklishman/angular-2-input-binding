import {Component} from '@angular/core';

@Component({
    selector: 'text',
    template: `
        <h1>Text ({{textValue}})</h1>
        <p>
            <input ref-text type="text" [(ngModel)]="textValue" required> 
            <button (click)="logText(text.value)">Update Log</button>
        </p>
        <p>Template Reference Variable</p>
        <p>
            Value: {{text.value}}, required: {{text.required}},
            type: {{text.type}}
        </p>
        
        <h2>Log</h2>
        <p><button (click)="clearLog()">clear</button></p>
        <pre>{{log}}</pre>`,
    styles: ['.selected {color: ForestGreen;}']
})
export class TextComponent {

    private log: string ='';
    private textValue = "text box";

    private logText(value: string): void {
        this.log += `Text changed to '${value}'\n`
    }

    private clearLog() {
        this.log = '';
    }

}