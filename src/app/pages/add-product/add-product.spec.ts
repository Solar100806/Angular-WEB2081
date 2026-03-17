import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './add-product.html'
})
export class AddProduct {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      category: ['']
    });
  }


  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }

  onSubmit() {
    if (this.productForm.valid) {
      console.log("Dữ liệu sản phẩm:", this.productForm.value);
    }
  }
}