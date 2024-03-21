import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ImageWallpaperComponent} from "../pages/image-wallpaper/image-wallpaper.component";
import {VideoWallpaperComponent} from "../pages/video-wallpaper/video-wallpaper.component";

export const routes: Routes = [
  {
    path:"",
    redirectTo:"wallpaper/image",
    pathMatch:"full"
  },
  {
    path:"wallpaper",
    loadComponent:()=>AppComponent,
    children: [
      {
        path:"image",
        loadComponent:()=>ImageWallpaperComponent
      },
      {
        path:"video",
        loadComponent:()=>VideoWallpaperComponent
      },
    ]
  }
];
