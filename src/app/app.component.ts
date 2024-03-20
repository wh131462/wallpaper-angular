import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService, ThemeType} from "../services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wallpaper-angular';
  constructor(private themeService:ThemeService) {
  }
  randomTheme() {
    this.themeService.setDarkMode(!!Math.floor(Math.random()*2))
  }
}
