import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
		this.loadMap();
	}

	@ViewChild('mapgoiania') mapgoiania: ElementRef;

	loadMap() {    
		let map1 = new GoogleMap(this.mapgoiania.nativeElement);
		map1.one(GoogleMapsEvent.MAP_READY).then(() => {
			let loc = new GoogleMapsLatLng(-16.688421, -49.264454)
			map1.setOptions({
				'controls': { myLocationButton: true, zoom: true },
				'camera': { latLng: loc, zoom: 15}
			});
		});
	}

}
