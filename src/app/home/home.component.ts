import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';
declare let $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   optionsMaterialize = {
     numVisible : 5
   }
   title = 'Tablero Virtual';
   authUser : any;
   userName: String;

  constructor() {
   
   }

  ngOnInit() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, this.optionsMaterialize );
      $( document ).ready( $(".dropdown-trigger").dropdown({ hover: true }) );  

     
      if(localStorage.getItem('name')){
        this.userName = localStorage.getItem('name');
                console.log('name', this.userName);
                console.log('userObject', localStorage.getItem('userObject'));

      }
   
   }

   userOptions(){
     console.log('click en el avatar');
   }

}
