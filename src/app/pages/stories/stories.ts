import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'Dragon Ball',
      releaseYear: '1984',
      genre: 'Action',
      image: 'https://upload.wikimedia.org/wikipedia/vi/4/4f/Dragon_Ball_Super_artwork.jpg',
      views: 50000,
    }, 
    {
      title: 'Attack On Titan',
      releaseYear: '2009',
      genre: 'Action',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwu56DRuxFmg7dOM3Mlp3CO5i_4fiimtNTQ&s',
      views: 90000,
    },
    {
      title: 'Bleach',
      releaseYear: '2001',
      genre: 'Action',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEMoIb0o2tl36SX-RKil4m6ThKQdflKjtcA&s',
      views: 120000,
    },
  ];

  deleteStory(index: number) {
    this.stories.splice(index, 1);
  }
}
