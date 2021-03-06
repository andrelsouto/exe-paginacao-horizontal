import { Component, OnInit, HostListener } from '@angular/core';

import { slideDownUpAnimation } from '../../animations/slide-down-up.animation';

@Component({
  selector: 'est-menu',
  templateUrl: './menu.component.html',
  animations: [slideDownUpAnimation],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMenu = true;
  showBody = false;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth > 1090) {
      this.showMenu = true;
      this.showBody = true;
    }
  }

  @HostListener('window:resize') onResize() {
    if (window.innerWidth > 1090) {
      this.showMenu = true;
      this.showBody = true;
    } else {
      this.showBody = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showBody = !this.showBody;
  }

}
