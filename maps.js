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
  center: 'PLainsboro NJ',
  zoom: 15,
  size: '500x400',
  maptype: 'roadmap',
  markers: [
    {
      location: '7 Saylor Ct Plainsboro ,NJ',
      label   : 'A',
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

console.log(gm.staticMap(params));


//gm.config('AIzaSyAFphUajjaip0uY6IK0-io1W_B3NzxddGU', '<insert your api key here>');
//gm.directions('31.470656,74.412929', '31.470789,74.408619' , 
//function(err, data){util.puts(JSON.stringify(data));});
