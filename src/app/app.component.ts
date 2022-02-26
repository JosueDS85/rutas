import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logged:boolean
  constructor(private miRouter:Router, private userService:UserService) {
    //this.logged=false

    let infoUser = localStorage.getItem('rutasUser')

    this.userService.infoUser = infoUser

    console.log('Informacion obtenida del localStorage'), infoUser

    if(infoUser!=null){
      this.miRouter.navigate(['tabs','tab1'])
    }else{
      this.miRouter.navigate(['loggin'])
    }

  }
}
