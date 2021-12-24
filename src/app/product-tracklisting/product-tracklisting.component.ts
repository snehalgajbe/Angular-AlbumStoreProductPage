import { Artist } from '../artist';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo:Artist;
  
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getArtist(1).subscribe(response => {
      console.log(response)
      this.albumInfo = response;
      console.log(this.albumInfo)
    });
  }

}
