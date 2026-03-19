import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ProductService } from '../product.service.ts/product.service.ts';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addForm: FormGroup;
  loading: boolean = false;
  error: string = "";
  success: string = "";

  constructor(
    private fb: FormBuilder,
    private productService: ProductService, 
  ) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],  
      price: [0, [Validators.required, Validators.min(1)]] 
    });
  }

  submitForm() {
    if (this.addForm.invalid) {
      this.error = "Vui lòng điền đầy đủ thông tin!";
      return;
    }

    this.loading = true;
    this.error = "";
    this.success = "";

    this.productService.addProduct(this.addForm.value).subscribe({
      next: (res) => {
        this.loading = false;
        this.success = "Thêm thành công!";
        this.addForm.reset({ price: 0 });
      },
      error: (err) => {
        this.loading = false;
        this.error = "Lỗi kết nối API!";
        console.error(err);
      }
    });
  }
}