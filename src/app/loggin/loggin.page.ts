import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AlertController } from '@ionic/angular';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {

  username:string
  password:string

  async showalert(msg,header){
    const instanciaAlert = await this.alerta.create({
      header: header,
      message: msg,
      buttons:['Cerrar']
    });

    await instanciaAlert.present()
  }
  
  constructor(private mirouter:Router,public alerta:AlertController,private userService:UserService) { }
  iniciarsesion(){
    if(this.username=='Josue' && this.password=='123'){
      let userInfo ={
        nombre:'Josue',
        mail:'Doaz@gmail',
        rol:'admin'
      }

      this.userService.infoUser = userInfo

      localStorage.setItem('rutasUser', JSON.stringify(userInfo))/* stringify: metodo para cconvertir a string */

      this.mirouter.navigate(["tabs","tab1"])
      this.username=''
      this.password=''
   }
    else{this.showalert('No te los sabes chavo','Error')
       this.username=''
       this.password=''
   }
  }
  ngOnInit() {
  }

}
