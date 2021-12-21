import { ProductService } from 'app/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product';
 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(response => {
      // console.log(response)
      this.products = response;
      console.log(this.products)
    });
  }

}
