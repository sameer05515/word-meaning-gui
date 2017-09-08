app.factory('WordMeaningServices', [
		'$http',
		'$routeParams',
		'topicMgmtAppConfig',
		function($http, $routeParams, topicMgmtAppConfig) {

			var WordMeaningServices = {};
			
			/**Fetch all Categories, Questions, Answers list*/

			WordMeaningServices.fetchWordsList = function() {

				return $http.get(topicMgmtAppConfig.wordMeaningServices + "/words");
			};

			WordMeaningServices.fetchQuestionsList = function(linkedCategoryID) {

				return $http.get(topicMgmtAppConfig.wordMeaningServices + "/words/" +
						linkedCategoryID +
						"/questions");
			};
			
			WordMeaningServices.fetchAnswersList = function(linkedCategoryID,linkedQuestionID) {

				return $http.get(topicMgmtAppConfig.wordMeaningServices + "/words/" +
						linkedCategoryID +
						"/questions/"+linkedQuestionID+"/answers");
			};
			
			/**Fetch Category, Question, Answer object on basis of given ID*/

			WordMeaningServices.fetchCategory = function(catID) {

				return $http.get(topicMgmtAppConfig.wordMeaningServices + "/words" + "/"
						+ catID);
			};
			
			WordMeaningServices.fetchQuestionForCategory = function(catID,questionID) {

				return $http.get(topicMgmtAppConfig.wordMeaningServices + "/words" + "/"
						+ catID+
						"/questions/"+questionID);
			};
			
			WordMeaningServices.fetchAnswerForQuestion = function(catID,questionID,answerID) {

				return $http.get(topicMgmtAppConfig.wordMeaningServices + "/words" + "/"
						+ catID+
						"/questions/"+questionID+
						"/answers/"+answerID);
			};
			
			/**Save Category, Question, Answer */

			WordMeaningServices.saveCategory = function(
					categoryObj) {

				var req = {
					method : 'POST',
					url : topicMgmtAppConfig.wordMeaningServices + "/words",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(categoryObj)
				};

				return $http(req);
			};
			
			WordMeaningServices.saveQuestion = function(
					questionObj,catID) {

				var req = {
					method : 'POST',
					url : topicMgmtAppConfig.wordMeaningServices + "/words/"+ catID+"/questions",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(questionObj)
				};

				return $http(req);
			};
			
			WordMeaningServices.saveAnswer = function(
					answerObj,catID,questionID) {

				var req = {
					method : 'POST',
					url : topicMgmtAppConfig.wordMeaningServices + "/words/"+ catID+"/questions/"+ questionID+"/answers",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(answerObj)
				};

				return $http(req);
			};
			
			/**Update Category, Question, Answer */

			WordMeaningServices.updateCategory = function(
					categoryObj) {

				var req = {
					method : 'PUT',
					url : topicMgmtAppConfig.wordMeaningServices + "/words",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(categoryObj)
				};

				return $http(req);
			};
			
			WordMeaningServices.updateQuestion = function(
					questionObj,catID) {

				var req = {
					method : 'PUT',
					url : topicMgmtAppConfig.wordMeaningServices + "/words/"+ catID+"/questions",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(questionObj)
				};

				return $http(req);
			};
			
			WordMeaningServices.updateAnswer = function(
					answerObj,catID,questionID) {

				var req = {
					method : 'PUT',
					url : topicMgmtAppConfig.wordMeaningServices + "/words/"+ catID+"/questions/"+ questionID+"/answers",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : angular.fromJson(answerObj)
				};

				return $http(req);
			};
			
			/**Delete Category, Question, Answer */

			WordMeaningServices.deleteCategory = function(catID) {

				var req = {
					method : 'DELETE',
					url : topicMgmtAppConfig.wordMeaningServices + "/words/"+catID,
					headers : {
						'Content-Type' : 'application/json'
					}
				};

				return $http(req);
			};
			
			WordMeaningServices.deleteQuestion = function(catID,questionID) {

				var req = {
					method : 'DELETE',
					url : topicMgmtAppConfig.wordMeaningServices + "/words/"+ catID+"/questions/"+questionID,
					headers : {
						'Content-Type' : 'application/json'
					}
				};

				return $http(req);
			};
			
			WordMeaningServices.deleteAnswer = function(catID,questionID,answerID) {

				var req = {
					method : 'DELETE',
					url : topicMgmtAppConfig.wordMeaningServices + "/words/"+ catID+"/questions/"+ questionID+"/answers/"+answerID,
					headers : {
						'Content-Type' : 'application/json'
					}
				};

				return $http(req);
			};

			
			
			

			WordMeaningServices.next = function(list, counter) {
				// $scope.topic=list[counter];
				counter = (counter >= list.length - 1) ? 0 : (counter + 1);
				return counter;

			};

			WordMeaningServices.previous = function(list, counter) {
				// $scope.topic=$scope.topicsList[counter];
				counter = (counter == 0) ? (list.length - 1) : (counter - 1);
				return counter;

			};
			
			WordMeaningServices.maxInterviewMgmtRatingValue=
				topicMgmtAppConfig.maxInterviewMgmtRatingValue;

			return WordMeaningServices;

		} ]);