import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MapComponent } from './map/map.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MapComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LeafletModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
