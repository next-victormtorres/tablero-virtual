import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $ : any;

@Component({
  selector: 'app-dashboard-note',
  templateUrl: './dashboard-note.component.html',
  styleUrls: ['./dashboard-note.component.css']
})
export class DashboardNoteComponent implements OnInit {

  optionsCarousel = {
    numVisible : 5
  };
  optionsModal = {

  };
  title = 'Tablero Virtual';
  authUser : any;
  userName: String;

  constructor() { }

  ngOnInit() {
    console.log('entrando a dashboard note');
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
