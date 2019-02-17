import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //  apiURL: string = 'https://localhost:8443/test';

    constructor(private httpClient: HttpClient) { }

    test(auth: String) {



          const  headers = new  HttpHeaders().set("Authorization", 'Bearer ' + auth);

        return this.httpClient.get<string>('/test', {headers});
    }


     post(path: string, auth: string, form: FormData){
        const  headers = new  HttpHeaders().set("Authorization", 'Bearer ' + auth);
        return this.httpClient.post(path, form, {headers})
    }

    getAllAds(path: string, auth: String) {

      const  headers = new  HttpHeaders().set("Authorization", 'Bearer ' + auth);

      return this.httpClient.get<string>(path, {headers});
  }
}