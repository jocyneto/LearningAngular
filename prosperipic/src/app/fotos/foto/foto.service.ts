import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from './foto';

const serverAPI = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http: HttpClient) {}

  listFromUser(username: string){
    return this.http.get<Foto[]>(`${serverAPI}/${username}/photos`);
  }

  listFromUserPaginated(username: string, page:number){
    const params = new HttpParams().append('page', page.toString())

    return this.http.get<Foto[]>(serverAPI + '/' + username + '/photos', { params: params });
  }

}
