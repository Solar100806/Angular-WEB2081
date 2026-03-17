import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: '',
      author: '',
      views: '',
    });
  }

  submitForm() {
    console.log('Form', this.addForm.value);
    alert('Truyện đã được thêm');
    this.addForm.reset();
  }
}
