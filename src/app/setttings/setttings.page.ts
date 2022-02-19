import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-setttings',
  templateUrl: './setttings.page.html',
  styleUrls: ['./setttings.page.scss'],
})
export class SetttingsPage implements OnInit {

  constructor(private mirouter:Router) { }

cerrarsesion(){
  this.mirouter.navigate(["loggin"])
}

  ngOnInit() {
  }

}
