(function () {
  'use strict';

  angular
    .module('exams')
    .controller('EditSingleExamController', EditSingleExamController);

  EditSingleExamController.$inject = ['$scope','$rootScope','$state','$stateParams', 'ExamsService', 'Authentication','$uibModal','exam'];

  function EditSingleExamController($scope,$rootScope, $state, $stateParams, ExamsService, Authentication, $uibModal, exam) {
	
	$scope.exam = null;
	
	if(exam){
		$scope.exam = exam.data;
	}
	
	$scope.edit_exam = function(_exam){
		var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/modules/exams/client/views/add-exam.client.view.html',
        controller: 'AddExamController',
        windowClass: 'add-question-modal',
        size: 'lg',
        resolve: {
		  old_exam: function(){
			return _exam;
		  }
        }
      });
	  
      modalInstance.result.then(function (result) {
      }, function () {
		  
      });
	};
	
	$scope.delete_exam = function(_exam){
      ExamsService.delete_exam(_exam._id)
        .then(function(response){

        }, function(error){

        });
	};

	$scope.add_question_to_exam = function (_exam) {	
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/modules/exams/client/views/add-question.client.view.html',
        controller: 'AddQuestionController',
        windowClass: 'add-question-modal',
        size: 'lg',
        resolve: {
          selected_exam: function () {
            return _exam;
          },
		  old_question: function(){
			return null;
		  }
        }
      });
	  
      modalInstance.result.then(function (result) {
      }, function () {
		  
      });
    };
	
	console.log($rootScope);
	
	$scope.edit_question = function(_exam, _question){
		var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/modules/exams/client/views/add-question.client.view.html',
        controller: 'AddQuestionController',
        windowClass: 'add-question-modal',
        size: 'lg',
        resolve: {
          selected_exam: function () {
			return _exam;
          },
		  old_question: function(){
			return _question;
		  }
        }
      });
	  
      modalInstance.result.then(function (result) {
      }, function () {
		  
      });
	};
	
  }
  
})();
