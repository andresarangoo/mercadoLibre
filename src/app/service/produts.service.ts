import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = 'https://api.mercadolibre.com/sites/MLC';
  seller = 'https://api.mercadolibre.com'

  constructor(private http: HttpClient) { }

  getProductos(query: string) {
    return this.http.get(`${this.URL}/search?q=${query}`)
      .pipe(map((respuesta) => {
        let results = respuesta['results'];
        let productos = [];        
        Object.keys(results).forEach(key => {
          const producto = results[key];
          productos.push(producto);
        });
        return productos;
      }));
  }

  getSeller(sellerID:Number){
    return this.http.get(`${this.seller}/user/${sellerID}`)
  }
}
