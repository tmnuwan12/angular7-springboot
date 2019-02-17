import { OnInit, Component } from '@angular/core';
import { Ad } from './ad';
import {ADS} from '../mock.ads';
import {ApiService} from '../api.service';
import {Global} from '../global'

@Component({
    selector: 'ad-items',
    templateUrl: './ad.component.html',
    styleUrls: ['./ad.component.css']
  })
export class AdItemsComponent implements OnInit {


    ngOnInit(): void {
        this.api.getAllAds('/ad/all', this.global.jwt).subscribe(res => {

            console.log('res ->' + JSON.stringify(res));
            var resArray = res['results'];
            var adArray = [];
            for(let i=0; i<resArray.length; i++){
             
                adArray.push({"description": resArray[i].description,
                "location": resArray[i].location,"id":resArray[i].id,"price": resArray[i].price,
               "url" : 'ad/img/' + resArray[i].id, "contactNo" : resArray[i].contactNo, "isAgent": resArray[i].isAgent});
            }

            this.ads = adArray;
          }, err => {
            console.error(err);
          }, () => {
            console.log("done http request");
          });
    }

    ads = ADS;
    selectedAd: Ad;
   
    constructor(private api: ApiService, private global: Global) {

     }

   
    onSelect(ad: Ad): void {
      this.selectedAd = ad;
    }

}