import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    private token: string;
    constructor(private route: ActivatedRoute) {

    }


    title = 'search';
    ngOnInit() {
        this.token = this.route.snapshot.paramMap.get('token');
        console.log('token >' + this.token);
    }
}