import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: ''},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: ''},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: ''}
  };
}
