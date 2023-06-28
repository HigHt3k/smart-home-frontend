import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MapComponent } from "./map/map.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
    path: 'map', component: MapComponent
  },
  {
    path: '', component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
