myApp.controller('screen08Controller', ['$scope', function($scope){

    let currentScreen = 8;

    $scope.words = ["jmenujes", "jmenuji", "odkud", "mluvim", "jsem", "dekuji", "shledanou"];
    $scope.wordsCzech = ["jmenuješ", "jmenuji", "odkud", "mluvím", "jsem", "děkuji", "shledanou"];

    $scope.disableBtn = true;
    const inputs = document.getElementsByClassName('words');
    $scope.points = 0;

    $scope.countLetters = function(event) {

        if(event.currentTarget.value.length >= event.currentTarget.name.length) {
            event.currentTarget.value = event.currentTarget.value.slice(0, -1);
        }

    }

    $scope.checkValue = function(event) {

        var helperPoints = 0;

        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value.length == inputs[i].name.length) {
                helperPoints++;
            }
        }
        console.log(helperPoints);
        
        if(helperPoints == $scope.words.length) {
            $scope.disableBtn = false;
        }
        helperPoints = 0;
    }

    $scope.checkExercise = function() {
        $scope.points = 0;
        
        for(var i = 0; i < inputs.length; i++) {
            if((inputs[i].value.toLowerCase() == $scope.words[i]) || (inputs[i].value.toLowerCase() == $scope.wordsCzech[i])) {
                $scope.points++;
            }
            else {

            }
        }
        $scope.checkTotalPoints($scope.points, currentScreen);
    }

}]);