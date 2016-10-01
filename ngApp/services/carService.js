var cardealership;
(function (cardealership) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.$resource = $resource;
                this.carResource = $resource('/api/cars/:id');
                this.carMakesResource = $resource('/api/makes');
            }
            CarService.prototype.getCarsOnService = function () {
                return this.carResource.query();
            };
            CarService.prototype.getCarOnService = function (carId) {
                return this.carResource.get({ id: carId });
            };
            CarService.prototype.getCarMakesOnService = function () {
                return this.carMakesResource.query();
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('cardealership').service('carService', CarService);
    })(Services = cardealership.Services || (cardealership.Services = {}));
})(cardealership || (cardealership = {}));
