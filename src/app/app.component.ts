import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my awsome Recipes';

  fetchEdamamRecipies() {
  const resourceURL =  'https://api.edamam.com/search&q&app_id&app_key=';

  const appKey = process.env.APP_KEY;

  const appId = process.env.APP_ID;

  const edamamUrl = `${resourceURL}${appKey}${appId} `;

  return fetch(edamamUrl);









  }
}
