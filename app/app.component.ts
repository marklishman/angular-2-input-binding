import { Component } from "@angular/core";

@Component({
    selector: 'app',
    template: `
        <text-box *ngIf="showSection('text-box')"></text-box>
        <text-area *ngIf="showSection('text-area')"></text-area>
        <checkbox *ngIf="showSection('checkbox')"></checkbox>
        <radio *ngIf="showSection('radio')"></radio>
        <drop-down *ngIf="showSection('drop-down')"></drop-down>
        <attribute *ngIf="showSection('attribute')"></attribute>
        `
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}