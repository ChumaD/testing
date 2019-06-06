import { Component } from '@angular/core';
import { ADDRGETNETWORKPARAMS } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';

  foods = [ "bread", "milk", "meat", "eggs", "rice"]


  remove(food){
    let index= this.foods.indexOf(food)
    this.foods.splice(index,1)

}
}