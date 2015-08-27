'use strict';

angular.module('app').controller('tabsController', ['$scope', function ($scope) {

    $scope.formData = {};

    $scope.tabs = [
        {
            heading: "Vare",
            active: true,
            disabled: false,
            template: "Templates/vare.html"
        },
        {
            heading: "Innhold",
            active: false,
            disabled: true,
            template: "Templates/innhold.html"
        },
        {
            heading: "Butikk",
            active: false,
            disabled: true,
            template: "Templates/butikk.html"
        },
        {
            heading: "Send",
            active: false,
            disabled: true,
            template: "Templates/send.html"
        }]

    //Moves to next (or previous) tab and enable tab if disabled
    $scope.continue = function (tab) {

        var nextTab = tab + 1;

        $scope.tabs[tab].active = !$scope.tabs[tab].active;

        $scope.tabs[nextTab].disabled = !$scope.tabs[nextTab].disabled;
        $scope.tabs[nextTab].active = !$scope.tabs[nextTab].active;

    };

            }]);