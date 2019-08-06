import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/produts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mostrar-mercancia',
  templateUrl: './mostrar-mercancia.component.html',
  styleUrls: ['./mostrar-mercancia.component.css']
})
export class MostrarMercanciaComponent implements OnInit {
  products = [] 
  constructor(private productsservice: ProductsService, private router:Router) { }


  ngOnInit() {
    
  }

  buscar(query:string){
    this.productsservice.getProductos(query).subscribe(answer => {
      this.products = answer;
      console.log(this.products)
    });
  }

  verInfo(){
    this.router.navigate(['ver-detalle']);
  }

}

