import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as M from '../../assets/materialize/js/materialize.min.js';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule }    from '@angular/platform-browser';



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
    private socialAuthService: AuthService 
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

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
            
      }
    ).catch(err => {
      //this._router.
    });
  }
  
}

