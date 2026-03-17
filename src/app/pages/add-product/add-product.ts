import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css']
})
export class FormsDemoComponent implements OnInit {
  productForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initProductForm();
    this.initRegisterForm();
  }

  initProductForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]], 
      category: ['']
    });
  }

  initRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getErrorMessage(form: FormGroup, controlName: string): string {
    const control = form.get(controlName);
    if (control?.errors && (control.dirty || control.touched)) {
      if (control.hasError('required')) return 'Trường này là bắt buộc';
      if (control.hasError('min')) return 'Giá trị phải lớn hơn 0';
      if (control.hasError('email')) return 'Email không hợp lệ';
      if (control.hasError('minlength')) {
        const requiredLength = control.getError('minlength').requiredLength;
        return `Tối thiểu ${requiredLength} ký tự`;
      }
    }
    return '';
  }

  submitProduct() {
    if (this.productForm.valid) {
      console.log('Product Data:', this.productForm.value);
    } else {
      this.productForm.markAllAsTouched(); 
    }
  }

  submitRegister() {
    if (this.registerForm.valid) {
      console.log('Register Data:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}