import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;
  loading: boolean = false;
  error: string = "";
  success: string = "";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],    
      author: ['', Validators.required],   
      views: [0, [Validators.required, Validators.min(0)]]      
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

    const data = this.addForm.value;
    
    this.http.post("http://localhost:3000/stories", data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Thêm truyện thành công!";
        this.addForm.reset({ views: 0 }); 
      },
      error: () => {
        this.loading = false;
        this.error = "Thêm truyện thất bại. Hãy kiểm tra kết nối API!";
        console.error("API Error");
      },
    });
  }
}