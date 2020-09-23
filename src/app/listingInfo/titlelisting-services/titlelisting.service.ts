import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TitlelistingService {

  constructor(private http: HttpClient) { }


    //location table
    getLocs() {
      return this.http.get('http://localhost:8080/api/v1/mpts');
    }
  
    //individual locations 
    getLoc(id : number){
      return this.http.get(`http://localhost:8080/api/v1/mpts/` + id);
    }

    getSleep(){
      return this.http.get('http://localhost:8080/api/v1/sleepingarrs/');
    }

   
}
