import {Component} from '@angular/core';

@Component({
    selector: 'drop-down',
    template: `
        <h1>Drop-down List</h1>
        <select #select [(ngModel)]="current" (change)="logDropdown(select.value)">
            <option *ngFor="let item of list" [value]="item.id">{{item.name}}</option>
        </select>
        
        <h2>Log <button (click)="log=''">Clear</button></h2>
        <pre>{{log}}</pre>`
})
export class DropDownComponent {

    private list = [
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' }
    ];
    private current: number = 2;
    private log: string ='';

    private logDropdown(id: number): void {
        const NAME = this.list.find( (item: any) => item.id == id ).name;
        this.log += `Value ${NAME} was selected\n`
    }
}