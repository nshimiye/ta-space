import { Component, ViewChildren, QueryList, ContentChildren, ViewChild, ViewContainerRef } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'ta-space';
  @ViewChildren(TopbarComponent) topbars: QueryList<TopbarComponent>
  @ViewChild('topbarOutlet', { read: ViewContainerRef, static: false }) topbarOutlet;

  ngAfterViewInit() {
    this.topbars.forEach(alertInstance => console.log(alertInstance));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
