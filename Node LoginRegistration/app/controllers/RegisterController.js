(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location'];
    function RegisterController(UserService, $location) {
        var vm = this;

        vm.dataLoading = false;
        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        alert('Registration successful');
                        $location.path('/');
                    } else {
                        alert('An error occurred during registration');
                        $scope.dataLoading = false;
                    }
                })
                .catch(function (error) {
                    alert('An error occurred during registration: ' + error.message);
                    $scope.dataLoading = false;
                });
        };
    }
})();
                  