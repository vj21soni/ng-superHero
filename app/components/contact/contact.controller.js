(function(){
    'use strict';
    angular.module('app').controller('contactController', contactController);
    contactController.$inject = [];
    function contactController(){
        var $ctrl = this;

        $ctrl.initContact = initContact;

        function initContact(){
            $ctrl.title = "Contact Controller";
        };
    };
})();