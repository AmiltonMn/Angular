import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockProductService } from '../../services/mock-product.service';

@Component({
  selector: 'app-add-product-page',
  imports: [ ReactiveFormsModule ],
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent {
  productForm: FormGroup = new FormGroup({
    title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    description: new FormControl(''),
    price: new FormControl(0.01, [ Validators.min(0.01), Validators.max(1000) ])
  })

  constructor (private service: MockProductService) { }

  submit() {
    if (this.productForm?.invalid)
      return;

    this.service.addProduct(this.productForm?.value)
    this.productForm.reset()
  }
}
