import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import {Global} from './global';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  
  constructor(private route: ActivatedRoute, private apiService: ApiService, private global: Global) {
  }


  title = 'realestate';
  ngOnInit() {

   this.route.queryParams
   .subscribe(params => {
     console.log('incoming params.token-' + params.token); // {order: "popular"}
     if(params.token && this.global.jwt !== params.token){
       this.global.jwt = params.token;
       console.log("secure token ->", this.global.jwt);
     }else{
       console.log("not changing token ->", this.global.jwt);
     }
    
    

   });

   
  }

  public test(){
    this.apiService.test(this.global.jwt).subscribe(res => {
      console.log('res ->' + JSON.stringify(res));
    }, err => {
      console.error(err);
    }, () => {
      console.log("done http request");
    });
  }
}
