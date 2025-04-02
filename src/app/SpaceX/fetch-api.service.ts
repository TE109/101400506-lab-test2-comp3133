import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../mission';

@Injectable({
  providedIn: 'root'
})
export class FetchAPIService {

  constructor(private http:HttpClient) { }

  fetchMissions(url: any){
    return this.http.get<Mission[]>(url);
  }

  
}
