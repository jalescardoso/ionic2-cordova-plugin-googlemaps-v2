import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {}
 
	ionViewDidLoad(){
		this.loadMap();
	}

	@ViewChild('maphome') maphome: ElementRef;

	loadMap() {    
		let map0 = new GoogleMap(this.maphome.nativeElement);
		map0.one(GoogleMapsEvent.MAP_READY).then(() => {
			let loc = new GoogleMapsLatLng(-16.757788, -49.343155)
			map0.setOptions({
				'controls': { myLocationButton: true, zoom: true },
				'camera': { latLng: loc, zoom: 15}
			});
		});
	}
}