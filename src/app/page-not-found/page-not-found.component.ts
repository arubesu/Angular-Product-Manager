import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  title: string = 'PAGE NOT FOUND';
  message: string = 'We\'re sorry. The page you are looking for cannot be found.';
  imageUrl: string = 'http://worldartsme.com/images/sad-free-clipart-1.jpg'
  imgWidth: string = '300';
}
