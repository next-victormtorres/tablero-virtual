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
    if(localStorage.getItem('name')){
      console.log('usuario ya logeado', localStorage.getItem('name'));
      this._router.navigate(['./home']);
    }
  }


  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        localStorage.setItem('name', userData['name']);
        localStorage.setItem('email', userData['email']);
        localStorage.setItem('image', userData['image']);
        localStorage.setItem('token', userData['token']);
         this._router.navigate(['/home']);   
      }
    ).catch(err => {
      console.log('error in auth with google')
      this._router.navigate(['/'])
    });
  }
  
}

