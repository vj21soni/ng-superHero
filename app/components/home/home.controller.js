(function(){
    'use strict';
    angular.module('app').controller('homeController', homeController);
    homeController.$inject = ['nx'];
    function homeController(nx){
        var $ctrl = this;

        $ctrl.initHome = initHome;

        function initHome(){
            $ctrl.title = "Home Controller";
            nx.message.success('Hello');
        };
    };
})();