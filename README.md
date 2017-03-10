# ionic2-cordova-plugin-googlemaps-v2

Documentation on cordova-plugin-googlemaps v2 wrapper for ionic 2 and example.

This project is under analysis and will soon be inside the ionic-native library

The big problem with the previous version was not being able to use more than one map, which was solved with the new version of the cordova-plugin-googlemaps plugin authored by @ wf9a5m75.

Here is the ionic-native design and an example of wrapper use.

Enter the terminal and the ionic-native folder and enter the following commands:
```
cd ionic-native
npm i 
npm run build
```
after
```
cd myapp
npm i
npm i ../ionic-native/ --save
cordova platform add android
cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID="<YOUR KEY>" --variable API_KEY_FOR_IOS="<YOUR KEY>"
ionic run android
```

The example follows the model ionic start myApp tabs --v2 with only 2 tabs because, more than that would burst the basic memory limit of the 16mb android

Sorry for the english of google hehe
thanks for listening

<img src="https://raw.githubusercontent.com/jalescardoso/ionic2-cordova-plugin-googlemaps-v2/master/1.png" width="200">
<img src="https://raw.githubusercontent.com/jalescardoso/ionic2-cordova-plugin-googlemaps-v2/master/2.png" width="200">