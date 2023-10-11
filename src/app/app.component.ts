import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lif-cycle';
  isAlive:boolean = true;

  changeAliveCheckSample():void{
    this.isAlive = !this.isAlive;
  }

}
