(function() {
  'use strict'

  angular.module('users', ['ngMaterial'])

  angular
    .module('starter', ['ngMaterial', 'users'])
    .config(($mdIconProvider) => {
      $mdIconProvider
        .defaultIconSet('./assets/svg/avatars.svg')
        .icon('share', './assets/svg/share.svg', 24)
        .icon('menu', './assets/svg/menu.svg', 24)
    })
    .run(($log) => {
      $log.debug('starter app running')
    })
})()
