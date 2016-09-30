(function() {
  'use strict'

  angular
    .module('starter')
    .controller('AppController', AppController)

  AppController.$inject = ['$log']

  function AppController($log) {
    $log.debug('AppController up & running...')
  }
})()
