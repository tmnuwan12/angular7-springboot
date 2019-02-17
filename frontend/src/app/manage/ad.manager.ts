import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Global} from '../global';
@Component({
    selector: 'ad-manager',
    templateUrl: './ad.manager.html',
    styleUrls: ['./ad.manager.css']
  })
export class AdManagerComponent implements OnInit {

  text: string;
  description: string;
  price: string = null;
  location: string = null;
  selectedFile = null;
  isAgent:string;
  serverMsg = '';
  agentSelections = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'}
  ];

  contactNo:string = null;

  constructor(private api: ApiService, private global: Global){

  }

  ngOnInit(): void {
    this.text = "hello";
  }


  onFileChange(event){
      console.log(event);
      this.selectedFile = event.target.files[0];
  }

  save(event){
    console.log('setting jwt -'+ this.global.jwt);
    const fd = new FormData();
    fd.append('description', this.description);
    fd.append('price', this.price)
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('location', this.location);
    fd.append('contactNo', this.contactNo);
    fd.append('isAgent', this.isAgent);

   this.api.post('/ad/upload', this.global.jwt, fd).subscribe(a => {
     console.log('a -' + a);
  }, e => {
      this.serverMsg = 'error occured.!!';
      console.log('error -' + JSON.stringify(e));
    }, () => {
      this.serverMsg = 'Uploaded data to the backend, success !!';
      console.log('complete');
    })
  }

  /**
   * Update value of
   * @param value 
   */
  updateDescription(value){
    this.description = value;
  }

  onIsAgentChange(event){
    this.isAgent = event.target.value;
  }

 



}