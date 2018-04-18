import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//custom html element that will allow us to insert the root component into our index.html
  templateUrl: './app.component.html',//views that will be used by component; we could define the view right here or give a path to another file
  styleUrls: ['./app.component.css']//similarly, style could be added here, but again it is in a separate file - SOC yo
})
export class AppComponent {
  title = 'butts';
}
