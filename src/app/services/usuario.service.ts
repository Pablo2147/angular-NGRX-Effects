import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.baseUrl}/users?per_page=6`)
      .pipe(
        map( resp => resp['data'])
      );
  }


  getUserById( id: string ) {
    return this.http.get(`${environment.baseUrl}/users/${id}`)
      .pipe(
        map( resp => resp['data'])
      );
  }
}
