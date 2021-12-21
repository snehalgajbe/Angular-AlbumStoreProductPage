import { Product } from 'app/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';

@Injectable()
export class ProductService {

  private _albumUrl ='../assets/album.json';
 private _productsUrl='../assets/products.json';

  constructor(private _http:HttpClient) { }

 getAlbum(id:number):Observable<Album> {
   return this._http.get<Album>(this._albumUrl);
  }

  getProducts():Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl)
  }
}
