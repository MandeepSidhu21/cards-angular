import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'Nature',
      imageURL: 'assets/tree.jpeg',
      content: 'I saw a neat tree today.'
    },
    {
      title: 'Biking',
      username: 'biking02',
      imageURL: 'assets/biking.jpeg',
      content: 'I biked today..'
    },
    {
      title: 'Snowy Mountain',
      username: 'snow',
      imageURL: 'assets/mountain.jpeg',
      content: 'This mountain had so much snow.'
    }
  ];
}
