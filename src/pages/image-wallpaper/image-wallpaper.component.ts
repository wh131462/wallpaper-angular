import { Component } from '@angular/core';
import {ImageService} from "./image.service";

@Component({
  selector: 'app-image-wallpaper',
  standalone: true,
  imports: [],
  templateUrl: './image-wallpaper.component.html',
  styleUrl: './image-wallpaper.component.scss'
})
export class ImageWallpaperComponent {
    constructor(public imageService:ImageService) {
    }
    ngOnInit(){
      this.imageService.queryList();
    }
}
