import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-note',
  templateUrl: './dashboard-note.component.html',
  styleUrls: ['./dashboard-note.component.css']
})
export class DashboardNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('entrando a dashboard note');
  }

}
