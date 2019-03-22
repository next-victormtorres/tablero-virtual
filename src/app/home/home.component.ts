import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Tablero Virtual';
 
  constructor() {
   
   }

  ngOnInit() {
      this.initializeCarrousel();

   }

   userOptions(){
     console.log('click en el avatar');
   }

   initializeCarrousel(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        numVisible : 3
      } );
    });
   }

   


}
