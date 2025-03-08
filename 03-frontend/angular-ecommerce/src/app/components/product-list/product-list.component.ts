import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];

  //Inject the ProductService dependency
  constructor(private productService: ProductService) {}

  //this is similar to @PostConstruct in java
  nqOnInit(): void {
    this.listProducts();
  }

  //call the service to get the list of products this method is invoked once you subscribe.
  listProducts() {
    this.productService.getProductList().subscribe((data) => {
      this.products = data; //assign the data to the products array
    });
  }
}
