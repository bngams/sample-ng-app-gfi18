import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../share/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private api: ApiService) { }

  fetchProducts(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.api.route('/product'));
  }
}
