import { Component, OnInit, Input } from '@angular/core';
import { Ad } from './ad';

@Component({
    selector: 'ad-detail',
    templateUrl: './ad.detail.component.html',
    styleUrls: ['./ad.detail.component.css']
  })
export class AdDetailComponent implements OnInit {


    @Input() selection: Ad;

    ngOnInit(): void {
        
    }


}