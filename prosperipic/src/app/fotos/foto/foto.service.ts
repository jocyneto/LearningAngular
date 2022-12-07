import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from './foto';
const serverAPI = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http: HttpClient) {}

  listFromUser(username: string){
    return this.http.get<Foto[]>(`${serverAPI}${username}/photos`);
  }

}
