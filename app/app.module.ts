import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }   from './app.component';
import { AttributeComponent } from "./attribute.component";
import { CheckboxComponent } from "./checkbox.component";
import { DropDownComponent } from "./drop-down.component";
import { RadioComponent } from "./radio.component";
import { TextComponent } from "./text.component";
import { TextAreaComponent } from "./text-area.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AttributeComponent,
        CheckboxComponent,
        DropDownComponent,
        RadioComponent,
        TextComponent,
        TextAreaComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }