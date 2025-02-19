import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Product } from '../../models/product';
import { MockProductService } from '../../services/mock-product.service';

@Component({
  selector: 'app-products-page',
  imports: [ RouterOutlet ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = []
  constructor(
    private productService: MockProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.products = this.productService.getProducts()
  }

  addNew() {
    this.router.navigate(['products', 'add'])
  }
}
