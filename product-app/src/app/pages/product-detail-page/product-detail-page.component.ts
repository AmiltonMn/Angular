import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { MockProductService } from '../../services/mock-product.service';

@Component({
  selector: 'app-product-detail-page',
  imports: [  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: MockProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        let param = params.get('id')
        if (param === null)
          return;

        // Convertendo de string para number ou let id = parseInt(param);
        let id = +param;
        let product = this.service.getProductById(id);

        if (product === null)
          return;

        this.product = product;
      })
  }

  goBack() {
    this.router.navigate(['products'])
  }
}
