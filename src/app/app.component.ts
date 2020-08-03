import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  public disabled = false;
  public content = 'Button';
  public color = 'costar';
  public type = 'contained';
  public icon = 'map';
  public products = [
		{ 	Value : "product 1",
			ID : 1
		},
		{	Value : "product 2",
			ID : 2
		},
		{	Value : "product 3",
			ID : 3
		}
	];
}
