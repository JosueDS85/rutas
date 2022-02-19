import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logged:boolean
  constructor(private miRouter:Router) {
    this.logged=false

    if(this.logged){
      this.miRouter.navigate(['tabs','tab1'])
    }else{
      this.miRouter.navigate(['loggin'])
    }

  }
}
