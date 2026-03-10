import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = 'Vũ Duy Hiếu';
  age = 19;

  // method:
  sayHello() {
    console.log("Xin chào");
  }
}
