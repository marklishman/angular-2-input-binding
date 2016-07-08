import { Component } from '@angular/core';

import { AttributeComponent } from "./attribute.component";
import { CheckboxComponent } from "./checkbox.component";
import { DropDownComponent } from "./drop-down.component";
import { RadioComponent } from "./radio.component";
import { TextAreaComponent } from "./text-area.component";
import { TextComponent } from "./text.component";

@Component({
    selector: 'app',
    template: `
        <text-box *ngIf="showSection('text-box')"></text-box>
        <text-area *ngIf="showSection('text-area')"></text-area>
        <checkbox *ngIf="showSection('checkbox')"></checkbox>
        <radio *ngIf="showSection('radio')"></radio>
        <drop-down *ngIf="showSection('drop-down')"></drop-down>
        <attribute *ngIf="showSection('attribute')"></attribute>
        `,
    directives: [
        AttributeComponent,
        CheckboxComponent,
        DropDownComponent,
        RadioComponent,
        TextAreaComponent,
        TextComponent
    ]
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