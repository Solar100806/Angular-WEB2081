import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Story {
  id: string | number;
  title: string;
  author: string;
  views: number;
}

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit {
  private http = inject(HttpClient);

  stories: Story[] = [];
  isLoading = false;
  isError = false;
  deletingId: string | number | null = null;

  private apiUrl = 'http://localhost:3001/stories';

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.isLoading = true;
    this.isError = false;

    this.http.get<Story[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.stories = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Lỗi khi tải stories:', err);
        this.isError = true;
        this.isLoading = false;
      },
    });
  }

  deleteItem(id: string | number) {
    if (!confirm('Bạn có chắc muốn xóa không?')) return;

    this.deletingId = id;

    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((s) => s.id !== id);
        this.deletingId = null;
      },
      error: () => {
        alert('Xóa thất bại!');
        this.deletingId = null;
      },
    });
  }
}