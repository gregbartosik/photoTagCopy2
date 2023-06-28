import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Take a photo',
      url: '/capture',
      icon: 'camera'
    },
    {
      title: 'View gallery',
      url: '/view',
      icon: 'globe'
    },
    {
      title: 'View carousel',
      url: '/viewcarousel',
      icon: 'globe'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'globe'
    }
  ];
}
