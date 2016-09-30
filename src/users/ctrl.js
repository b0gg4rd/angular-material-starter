(function() {
  'use strict'

  angular
    .module('users')
    .controller('UserController', UserController)

  UserController.$inject = ['userService', '$mdBottomSheet', '$mdSidenav', '$log']

  /**
   * Main Controller for the Angular Material Starter App
   */
  function UserController(userService, $mdBottomSheet, $mdSidenav, $log) {
    var self = this

    self.selected     = null
    self.users        = [ ]
    self.selectUser   = selectUser
    self.share        = makeContact
    self.toggleList   = toggleUserList
    self.makeContact  = makeContact

    // Load all registered users

    userService
        .loadAllUsers()
        .then( function( users ) {
          self.users    = [].concat(users)
          self.selected = users[0]
        })

    /**
      * Select the current avatars
      */
    function selectUser(user) {
      self.selected = user
    }

    function makeContact(selectedUser) {
      $mdBottomSheet.show({
        controllerAs  : 'vm',
        controller    : ['$mdBottomSheet', ContactSheetController],
        templateUrl   : 'users/contactSheet.html',
        parent        : angular.element(document.getElementById('content'))
      })

      function ContactSheetController($mdBottomSheet) {
        this.user = selectedUser
        this.items = [
          { name: 'Phone',   icon: 'phone',       icon_url: 'assets/svg/phone.svg' },
          { name: 'Twitter', icon: 'twitter',     icon_url: 'assets/svg/twitter.svg' },
          { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
          { name: 'Hangout', icon: 'hangouts',    icon_url: 'assets/svg/hangouts.svg' }

        ]
        this.contactUser = function (action) {
          $mdBottomSheet.hide(action)
        }
      }
    }

    function toggleUserList() {
      $mdSidenav('left').toggle()
    }

  }

})()
