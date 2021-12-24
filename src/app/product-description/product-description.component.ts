import { Artist } from "../artist";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Album } from "../album";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"],
})
export class ProductDescriptionComponent implements OnInit {
  artistInfo: Artist;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getArtist(1).subscribe((response) => {
      console.log(response);
      this.artistInfo = response;
      // console.log(this.artistInfo)
    });
  }
}
