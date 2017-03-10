import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
		this.loadMap();
	}

	loadMap() {    
		let div = document.getElementById("mapgoogle");
		let map = new GoogleMap(div);
		map.one(GoogleMapsEvent.MAP_READY).then(() => {
			let loc = new GoogleMapsLatLng(33.995381, -118.475908)
			map.setOptions({
				'controls': { myLocationButton: true, zoom: true },
				'camera': { latLng: loc, zoom: 15}
			});
		});
	}
}