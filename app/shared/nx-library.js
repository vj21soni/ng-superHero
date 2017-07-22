(function () {
    'use strict';
    angular.module('nx-library', []);
})();

(function () {
    'use strict';
    angular.module('nx-library').factory('nxMessage', nxMessage);
    nxMessage.$inject = [];
    function nxMessage() {
        function success(msg) {
            console.log(msg);
            toastr.success(msg);
        };
        function error(msg) {
            console.log(msg);
            toastr.error(msg);
        };
        function info(msg) {
            console.log(msg);
            toastr.info(msg);
        };
        function warning(msg) {
            console.log(msg);
            toastr.warning(msg);
        };
        return {
            success: success,
            error: error,
            info: info,
            warning: warning
        };
    };
})();

(function () {
    'use strict';
    angular.module('nx-library').factory('nx', nx);
    nx.$inject = ['nxMessage'];
    function nx(nxMessage) {
        return {
            message: nxMessage
        };
    };
})();