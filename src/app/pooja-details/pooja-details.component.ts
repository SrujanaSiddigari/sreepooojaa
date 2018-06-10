import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pooja-details',
  templateUrl: './pooja-details.component.html',
  styleUrls: ['./pooja-details.component.css']
})
export class PoojaDetailsComponent implements OnInit {
poojadata=[

  {imagepath:'../assets/images/1.jpg'}
];
  constructor(private router:ActivatedRoute ) { }

  ngOnInit() {
    //this.router.params.subscribe((data)=>{

    //});
  }
}
