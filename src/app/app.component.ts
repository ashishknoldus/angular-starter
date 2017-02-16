import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {intern} from './intern';
import {AppService} from "./app.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls :['app/app.component.css'],
  providers : [AppService]
})

export class AppComponent  {
  name = 'Angular';
  bool = true;

  appService: AppService = null;

  constructor(private service: AppService) {
    this.appService = service;
  }

  myInterns : intern[];

  ngOnInit() {
    this.myInterns = this.appService.interns;
  }

  intern:intern = new intern();

  interns : intern[] = [{
    name : 'Akshay',
    id : 1
  },{
    name : 'Vijay',
    id : 2
  },{
    name : 'Ruhani',
    id : 3
  },{
    name : 'Nivica',
    id : 4
  }]

  func = function() {
    this.bool = !this.bool;
  }

  func2 = function (value:string) {
    alert(value);
  }

  submitForm = function () {
    alert(JSON.stringify(this.intern));
  }
}
