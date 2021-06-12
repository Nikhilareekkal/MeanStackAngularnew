import { animate, transition,style,state,trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'500px',
        backgroundColor:'aqua'
      })),
      state('close',style({
        height:'250px',
        backgroundColor:'red'
      })),
      transition('open=>close',[
        animate('1s')
      ]),
      transition('close=>open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  isOpen=true;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggle(){
  this.isOpen=!this.isOpen;
}
}
