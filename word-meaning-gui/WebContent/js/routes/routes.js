/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html"/* , controller: "PshortDescriptionCtrl" */})
    // PshortDescriptions
    .when("/about", {templateUrl: "partials/about.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/faq", {templateUrl: "partials/faq.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/pricing", {templateUrl: "partials/pricing.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/services", {templateUrl: "partials/services.html"/* , controller: "PshortDescriptionCtrl" */})
    .when("/contact", {templateUrl: "partials/contact.html"/* , controller: "PshortDescriptionCtrl" */})
    // links
    .when("/links", {templateUrl: "partials/link-mgmt/links-list.html"/* , controller: "repeatController" */})
	
    // categories    
	.when("/categories", {templateUrl: "partials/categories/showAllCategories-list.html", controller: "showAllCategoriesController-list"})
	.when("/categories/:id", {templateUrl: "partials/categories/showCategory.html", controller: "showCategoryController"})
	
	// questions    
	.when("/categories/:catID/questions", {templateUrl: "partials/questions/showAllQuestions-list.html", controller: "showAllQuestionsController-list"})
	.when("/categories/:catID/questions/:quesID", {templateUrl: "partials/questions/showQuestion.html", controller: "showQuestionController"})
	
	// answers    
	.when("/categories/:catID/questions/:quesID/answers", {templateUrl: "partials/answers/showAllAnswers-list.html", controller: "showAllAnswersController-list"})
	.when("/categories/:catID/questions/:quesID/answers/:ansID", {templateUrl: "partials/answers/showAnswer.html", controller: "showAnswerController"})
	
	// groups
    .when("/groups", {templateUrl: "partials/groups/showAllGroups.html", controller: "showAllGroupsController"})
	.when("/groups-list", {templateUrl: "partials/groups/showAllGroups-list.html", controller: "showAllGroupsController-list"})
	.when("/groups-list/:id", {templateUrl: "partials/groups/showGroup.html", controller: "showGroupController"})
	.when("/groups/new", {templateUrl: "partials/groups/createGroup.html", controller: "createGroupController"})
	.when("/groups/:id", {templateUrl: "partials/groups/updateGroup.html" , controller: "updateGroupController"})
	// views
    .when("/views", {templateUrl: "partials/views/showAllViews.html", controller: "showAllViewsController"})
	.when("/views-list", {templateUrl: "partials/views/showAllViews-list.html", controller: "showAllViewsController-list"})
	.when("/views-list/:id", {templateUrl: "partials/views/showView.html", controller: "showViewController"})
	.when("/views/new", {templateUrl: "partials/views/createView.html", controller: "createViewController"})
	.when("/views/:id", {templateUrl: "partials/views/updateView.html" , controller: "updateViewController"})
	.when("/site-updates", {templateUrl: "partials/help/updates.html" , controller: "topicUpdatesController"})
	// Blog
    .when("/blog", {templateUrl: "partials/blog.html"/* , controller: "BlogCtrl" */})
    .when("/blog/post", {templateUrl: "partials/blog_item.html"/* , controller: "BlogCtrl" */})
    // Vocabulary
    .when("/vocabulary/new", {templateUrl: "partials/vocabulary/addWord.html" , controller: "addWordController" })
    .when("/vocabulary/:id", {templateUrl: "partials/vocabulary/updateWord.html" , controller: "updateWordController" })
    .when("/vocabulary", {templateUrl: "partials/vocabulary/showAllWords.html" , controller: "showAllWordsController" })
    .when("/words",{templateUrl: "partials/words/showWords.html" , controller: "showAllWordsController" })
    
    // else 404
    .otherwise("/404", {templateUrl: "../../partials/404.html"/* , controller: "PshortDescriptionCtrl" */});
}]);