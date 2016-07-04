import {Component} from '@angular/core';

@Component({
    selector: 'drop-down',
    template: `
        <h1>Drop-down List</h1>
        <select #select [(ngModel)]="current" (change)="logDropdown(select.value)">
            <option *ngFor="let item of list" [value]="item.id">{{item.name}}</option>
        </select>
        
        <h2>Log</h2>
        <p><button (click)="clearLog()">clear</button></p>
        <pre>{{log}}</pre>`
})
export class DropDownComponent {

    private list = [
        {
            id: 1,
            name: 'one'
        },
        {
            id: 2,
            name: 'two'
        },
        {
            id: 3,
            name: 'three'
        },
        {
            id: 4,
            name: 'four'
        }
    ]

    private current: number = 2;

    private log: string ='';

    private logDropdown(id: number): void {
        this.log += `Value ${id} was selected from drop down\n`
    }

    private clearLog() {
        this.log = '';
    }

}