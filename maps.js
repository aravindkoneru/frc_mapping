var GoogleMapsAPI = require('googlemaps');
var util = require('util');

var publicConfig = {
  key: 'AIzaSyAFphUajjaip0uY6IK0-io1W_B3NzxddGU',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
};
var gm = new GoogleMapsAPI(publicConfig);

var params = {
  center: 'Cheshire, CT, USA',
  zoom: 15,
  size: '4096 x 216',
  maptype: 'roadmap',
  markers: [
    {
        location: 'Cheshire, CT, USA',
      label   : '',
      color   : 'green',
      shadow  : true
    }
  ],
  style: [
    {
      feature: 'road',
      element: 'all',
      rules: {
        hue: '0x00ff00'
      }
    }
  ],
  path: [
    {
      color: '0x0000ff',
      weight: '5',
      points: [
        '41.139817,-77.454439',
        '41.138621,-77.451596'
      ]
    }
  ]
}

console.log(gm.staticMap(params));

function generateRequestObject(teamLoc, teamNum){
var params = {
  center: teamLoc,
  zoom: 15,
  size: '500x400',
  maptype: 'roadmap',
  markers: [
    {
        location: teamLoc,
      label   : teamNum,
      color   : 'green',
      shadow  : true
    }
  ],
  style: [
    {
      feature: 'road',
      element: 'all',
      rules: {
        hue: '0x00ff00'
      }
    }
  ],
  path: [
    {
      color: '0x0000ff',
      weight: '5',
      points: [
        '41.139817,-77.454439',
        '41.138621,-77.451596'
      ]
    }
  ]
};
}
