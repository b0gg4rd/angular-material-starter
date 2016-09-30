(function() {
  'use strict'

  angular
    .module('starter')
    .config(AppConfiguration)

  AppConfiguration.$inject = ['$mdIconProvider']

  function AppConfiguration($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('./assets/svg/avatars.svg')
      .icon('share', './assets/svg/share.svg', 24)
      .icon('menu', './assets/svg/menu.svg', 24)
  }

})()
