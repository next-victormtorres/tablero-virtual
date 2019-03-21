import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  title = 'tablero virtual NEXT';

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  redirectHome(){
    this._router.navigate([ './home' ]);
  }

}
