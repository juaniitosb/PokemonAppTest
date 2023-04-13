import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { CardComponent } from './pages/card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { TablePanelComponent } from './pages/table-panel/table-panel.component';
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {TabViewModule} from "primeng/tabview";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    TablePanelComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        InputTextModule,
        TableModule,
        ButtonModule,
        CardModule,
        PanelModule,
        TabViewModule,
        BrowserAnimationsModule,
        HttpClientModule,
        BadgeModule,
        AvatarModule,
        TooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
