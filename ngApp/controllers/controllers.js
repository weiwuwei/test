var cardealership;
(function (cardealership) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal, carService) {
                this.$uibModal = $uibModal;
                this.carService = carService;
                this.message = 'Hello from the home page!';
                this.cars = carService.getCarsOnService();
                this.carMakes = carService.getCarMakesOnService();
            }
            HomeController.prototype.getCarDetails = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/carDetails.html',
                    controller: cardealership.Controllers.CarDetailsController,
                    controllerAs: 'carDetailsController',
                    resolve: {
                        carId: function () { return id; },
                    },
                    size: 'sm'
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = cardealership.Controllers || (cardealership.Controllers = {}));
})(cardealership || (cardealership = {}));
