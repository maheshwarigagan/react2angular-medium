const bucketlist = [{
  city: 'New York',
  position: 3,
  sites: ['Statue of Liberty', '9/11 Museum', 'Rockefeller center', 'Friends studio', 'Central Park'],
  img: 'http://image-of-state-of-liberty',
},{
  city: 'Paris',
  position: 2,
  sites: ['Eiffel Tower', 'Locks bridge'],
  img: 'http://image-of-eiffel-tower',
},
{
  city: 'Santorini',
  position: 1,
  sites: ['The place with the nice view', 'restaurants'],
  img: 'http://overlooking-water-images',
}];

function AngularComponentCtrl() {
  var ctrl = this;
  ctrl.bucketlist = bucketlist;
};


angular.module('demoApp').component('angularComponent', {
  templateUrl: 'angularComponent.html',
  controller: AngularComponentCtrl
});
