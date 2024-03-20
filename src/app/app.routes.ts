import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path:"",
    redirectTo:"wallpaper",
    pathMatch:"full"
  },
  {
    path:"wallpaper",
    data:{},
    loadComponent:()=>AppComponent
  }
];
