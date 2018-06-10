import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-poojacategories',
  templateUrl: './poojacategories.component.html',
  styleUrls: ['./poojacategories.component.css']
})
export class PoojacategoriesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  //this.http.get("http://localhost/sreepooja/homepoojaretr.php")
}
