angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives','starter.service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
