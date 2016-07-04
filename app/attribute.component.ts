import {Component} from '@angular/core';

@Component({
    selector: 'attribute',
    template: `
        <h1>Properties and Attributes</h1>
        <p>
            <input #one type="text" value="set as attribute" [value]="'property binding'">
            Attribute: {{one.getAttribute("value")}}, property: {{one.value}}
        </p>
        <p>
            <button #two disabled="false">Disabled</button>
            Attribute: {{two.getAttribute("disabled")}}, property: {{two.disabled}}
        </p>
        <p>
            Button is disabled. Presence of 'disabled' attribute is checked, not the value.
        </p>`
})
export class AttributeComponent {}