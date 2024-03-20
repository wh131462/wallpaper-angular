import { Injectable } from '@angular/core';
export type ThemeType = "dark"|"light"|"dark light"|undefined;
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private doc:Document) { }

  /**
   * 设置主题类型
   * @param darkMode
   */
  setDarkMode(darkMode:boolean = false){
    const html = this.doc.querySelector("html")!;
    html.style.setProperty('--dark-mode', String(Math.ceil(Math.random()*2)%2))
  }
}
