import { Component, OnInit } from '@angular/core';
declare let $ : any;

import * as M from '../../assets/materialize/js/materialize.min.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   optionsCarousel = {
     numVisible : 5
   };
   optionsModal = {

   };
   title = 'Tablero Virtual';
   authUser : any;
   userName: String;

  constructor() {
   
   }

  ngOnInit() {
      var elemsCarousel = document.querySelectorAll('.carousel');
      M.Carousel.init(elemsCarousel, this.optionsCarousel );
      $('.modal').modal();
      $('select').formSelect();
      $( document ).ready( $(".dropdown-trigger").dropdown({ hover: true }) );  
      
      
     
      if(localStorage.getItem('name')){
        this.userName = localStorage.getItem('name');
      }
   
   }

   
   

}
