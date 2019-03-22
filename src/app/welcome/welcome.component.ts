import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as M from '../../assets/materialize/js/materialize.min.js';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})




export class WelcomeComponent implements OnInit {

  title = 'Quick board';
  optionsCarousel = {

  }

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
    console.log('ngOnInit')
    //var elems = document.querySelectorAll('.carousel');
    //var instances = M.Carousel.init(elems, this.optionsCarousel);

  }

  redirectHome() {
    this._router.navigate(['./home']);
  }

  onSignIn(googleUser) {
    console.log('hi');
  }

  /*socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }*/
  
}

