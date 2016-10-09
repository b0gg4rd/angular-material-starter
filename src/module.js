(function() {
  'use strict'

  angular
    .module('starter', ['ngMaterial', 'users'])
    .run(($log) => {
      $log.debug('Angular Material Starter App up & running...')
    })
})()
