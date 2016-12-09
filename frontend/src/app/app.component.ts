import { Component } from '@angular/core';
import {GlobalService} from "./shared/global.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public globalService : GlobalService, private router: Router) {
    globalService.signedIn = true;
    globalService.userID = 1;
    router.navigateByUrl("/profile");
  }

  logout(){
    this.globalService.signedIn = false;
    this.globalService.userID = null;
    this.router.navigateByUrl("/");
  }

  title = 'Gradus';
}
