import { Component, OnInit, Input } from '@angular/core';

import { flyLeftToRigthAnimation, flyRigthToLeftAnimation } from '../../animations/fly-left-rigth';

@Component({
  selector: 'est-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    flyLeftToRigthAnimation,
    flyRigthToLeftAnimation
  ]
})
export class CardComponent implements OnInit {

  @Input() vaga = '';
  @Input() left = true;

  constructor() { }

  ngOnInit() {
  }

}
