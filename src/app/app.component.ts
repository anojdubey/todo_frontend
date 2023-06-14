import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  count=0;
  constructor(){
    setTimeout(() => {
      this.title = 'Changed by setTimeout';
      this.count = this.count + 1;
    }, 1000);
  }
}
