import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';
@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Crib;//we want to accept binding called crib and assign it to a local property called crib
  //anything passed into crib property is locally referred to as crib and we can use it in our view

  constructor() { }

  ngOnInit() {
    
  }

}
