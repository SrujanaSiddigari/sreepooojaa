import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poojalist',
  templateUrl: './poojalist.component.html',
  styleUrls: ['./poojalist.component.css']
})
export class PoojalistComponent implements OnInit {
data=[];
  constructor() { }

  ngOnInit() {
    let desc="Shivaratri is mainfestival of lord shiva"
    for(var i=1;i<=8;i++){
      var itm={
       title:'shivaratri'+ i,
       imagepath:'../assets/images/'+ i + '.jpg',
       dsc:desc,
       poojaid:i

      };
      this.data.push(itm);
    }
  }

}
