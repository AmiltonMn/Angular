import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class MockProductService {

  private nextId = 1;
  private products: Product[] = []

  constructor() {
    this.initIfNeeded();
  }

  getProducts() : Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    product.id = this.nextId;
    this.nextId ++;
    this.products.push(product);
    this.save();
  }

  getProductById(id: number) : Product | null {
    for(let prod of this.products) {
      if (id !== prod.id)
        continue;

      return prod;
    }
    return null;
  }

  private save() {
    localStorage.setItem('mock-products', JSON.stringify(this.products));
  }

  private initIfNeeded() {
    let data = localStorage.getItem('mock-products');

    if (data === null) {
      this.initialize();
      return;
    }

    this.products = JSON.parse(data);
    this.nextId = this.products.length + 1;
  }

  private initialize() {
    this.products = [
      {
        id: 1,
        title: 'Banana',
        price: 2.40,
        description: 'Uma saborosa opção para o café da manhã!'
      },
      {
        id: 2,
        title: 'Maçã',
        price: 4.10,
        description: 'Uma saborasa opção para o almoço'
      },
      {
        id: 3,
        title: 'Goiaba',
        price: 6.00,
        description: 'Melhor do que pegar o ônibus'
      }
    ]

    this.nextId = 4;
  }
}
