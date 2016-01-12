'use strict';

angular.module('confusionApp')

  .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

      $scope.tab = 1;
      $scope.filtText = '';
      $scope.showDetails = false;

      $scope.dishes = menuFactory.getDishes();

      $scope.select = function(setTab) {
          $scope.tab = setTab;

          if (setTab === 2) {
              $scope.filtText = "appetizer";
          }
          else if (setTab === 3) {
              $scope.filtText = "mains";
          }
          else if (setTab === 4) {
              $scope.filtText = "dessert";
          }
          else {
              $scope.filtText = "";
          }
      };

      $scope.isSelected = function (checkTab) {
          return ($scope.tab === checkTab);
      };

      $scope.toggleDetails = function() {
          $scope.showDetails = !$scope.showDetails;
      };
  }])

  .controller('ContactController', ['$scope', function($scope) {

      $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

      var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

      $scope.channels = channels;
      $scope.invalidChannelSelection = false;

  }])

  .controller('FeedbackController', ['$scope', function($scope) {

      $scope.sendFeedback = function() {

          console.log($scope.feedback);

          if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
              $scope.invalidChannelSelection = true;
              console.log('incorrect');
          }
          else {
              $scope.invalidChannelSelection = false;
              $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
              $scope.feedback.mychannel="";
              $scope.feedbackForm.$setPristine();
              console.log($scope.feedback);
          }
      };
  }])

  .controller('DishDetailController', ['$scope', '$stateParams','menuFactory',
    function($scope, $stateParams, menuFactory) {
        var dish = menuFactory.getDish(parseint($stateParams.id, 10));
        $scope.dish = dish;

  }])

  .controller('DishCommentController', ['$scope', function($scope) {

      //Step 1: Create a JavaScript object to hold the comment from the form
      $scope.review = { rating:5, comment:"", author:"", date:""}

      $scope.submitComment = function () {

          //Step 2: This is how you record the date
          $scope.review.date = new Date().toISOString();
          console.log($scope.review);

          // Step 3: Push your comment into the dish's comment array
          $scope.dish.comments.push($scope.review);

          //Step 4: reset your form to pristine
          $scope.commentForm.$setPristine();
          //Step 5: reset your JavaScript object that holds your comment
          $scope.review = {rating:5, comment:"", author:"", date:""};
      }
  }])


  .controller('AboutController', ['$scope', 'corporateFactory',
    function($scope, corporateFactory){

      $scope.leaders = corporateFactory.getLeaders();
      console.log($scope.leaders);
  }])

  .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory',
    function($scope, menuFactory, corporateFactory){

        $scope.dish = menuFactory.getDish(0);
        console.log($scope.dish);

        $scope.promotion = menuFactory.getPromotion(0);
        console.log($scope.promotion);


        $scope.leader = corporateFactory.getLeader(3);
        console.log($scope.leader);
  }])

  ;
