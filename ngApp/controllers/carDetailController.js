var cardealership;
(function (cardealership) {
    var Controllers;
    (function (Controllers) {
        var CarDetailsController = (function () {
            function CarDetailsController(carId, carService, $uibModalInstance) {
                this.carId = carId;
                this.carService = carService;
                this.$uibModalInstance = $uibModalInstance;
                this.isEditMode = false;
                this.getCar();
            }
            CarDetailsController.prototype.closeModal = function () {
                this.$uibModalInstance.close();
            };
            CarDetailsController.prototype.getCar = function () {
                this.car = this.carService.getCarOnService(this.carId);
            };
            return CarDetailsController;
        }());
        Controllers.CarDetailsController = CarDetailsController;
    })(Controllers = cardealership.Controllers || (cardealership.Controllers = {}));
})(cardealership || (cardealership = {}));
