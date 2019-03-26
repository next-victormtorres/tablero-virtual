import { Component, OnInit } from '@angular/core';
declare let $ : any;

import * as M from '../../assets/materialize/js/materialize.min.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userName: String;
  
  constructor() {
   
   }

  ngOnInit() {
    if(localStorage.getItem('name')){
      this.userName = localStorage.getItem('name');
    }
   
   }

   
   

}
