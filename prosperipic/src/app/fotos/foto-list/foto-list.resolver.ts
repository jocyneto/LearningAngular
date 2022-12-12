import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Foto } from '../foto/foto';

import { FotoService } from './../foto/foto.service';

@Injectable({ providedIn: 'root'})
export class FotoListResolver implements Resolve<Observable<Foto[]>>{

    constructor(private service: FotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Foto[]> | Observable<Observable<Foto[]>> | Promise<Observable<Foto[]>> {
      const username = route.params.usernameX;
      return this.service.listFromUser(username);
    }

}
