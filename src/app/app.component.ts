import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  public label = 'Select a Product';
  public search = false;
  public placeholder = 'Select';
  public disabled = false;
  public content = 'Button';
  public color = 'costar';
  public type = 'contained';
  public icon = 'map';
  public pagesize = 10;
  public titlemetric = 'Tasks Completed';
	public subtitle = 'by the end of the week';
	public heroMetric = '204,000';
  public sidekickMetric = '-34';
  public sidekickColor = 'red';
  public tooltip = 'Tasks Completed by week\'s end';
  public titlemetric2 = 'Tasks Completed';
	public subtitle2 = 'by the end of the week';
	public heroMetric2 = '$204,000 MM';
  public sidekickMetric2 = '-34';
  public sidekickColor2 = 'red';
  public tooltip2 = 'Tasks Completed by week\'s end';
  public icons = 'info';
  public listItems =[
    { 	name : 'item 1',
      id : 1
    },
    {	name : 'item 2',
      id : 2
    },
    {	name : 'item 3',
      id : 3
    }
  ];

}
