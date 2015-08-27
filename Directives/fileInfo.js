//A custom directive to get the filename of the selected file
angular.module('app').directive('fileInfo', [function () {
    return {
        link: function (scope, element, attrs) {
            element.attr('required');
            element.on('change', function (evt) {
                var files = evt.target.files;
                scope.filename = files[0].name;
                scope.$apply(function () {
                    scope.formData.fileName = files[0].name;
                });

            });
        }
    }
}]);