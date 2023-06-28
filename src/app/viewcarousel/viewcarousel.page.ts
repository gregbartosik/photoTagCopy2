import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Viewer } from 'cesium';
import { CesiumService } from '../cesium.service';

@Component({
  selector: 'app-viewcarousel',
  templateUrl: './viewcarousel.page.html',
  styleUrls: ['./viewcarousel.page.scss'],
})
export class ViewcarouselPage implements OnInit, AfterViewInit  {

  @ViewChild('mapContainer') content: ElementRef;

  constructor(private cesiumService: CesiumService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.cesiumService.register(new Viewer(this.content.nativeElement));
   //const viewer = new Viewer(this.content.nativeElement);
   this.cesiumService.getPhotos().subscribe(photos => {
    photos.forEach(photo => {
        console.log(photo.lng,photo.lat);
        
        this.content.nativeElement.insertAdjacentHTML(
          //'beforeend',`<img width="100%" style="margin:auto; display: block;" src="${photo.url}" />`);
          'beforeend',`<img width="100%" style="margin:30px; display: block;" src="${photo.url}" />`);
    });
  });
 }

}
