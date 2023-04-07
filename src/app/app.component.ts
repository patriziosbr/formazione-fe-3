import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'formazione-fe-3';
  arrayOfObj = [
    {name: "Giovanni", surname: "Rossio", eta: 40},
    {name: "Sara", surname: "Verdi", eta: 20},
    {name: "Mario", surname: "Gialli", eta: 50}
  ]
  addData(obj : Array<any>, keyValueArr : Array<string>) {
    obj.forEach(ele => {
      ele[keyValueArr[0]] = keyValueArr[1]
    });
    // console.log(obj);
  }
  ngOnInit(): void {
    this.addData(this.arrayOfObj, ["pippo", "pluto"]);
    console.log(this.arrayOfObj);
  }
}
