import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-poojaitem',
  templateUrl: './poojaitem.component.html',
  styleUrls: ['./poojaitem.component.css']
})
export class PoojaitemComponent implements OnInit {
  @Input() dataitem;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  viewDetails(poojid){
   this.router.navigate(['poojadetails']);
  }

}
