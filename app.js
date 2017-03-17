var app = angular.module('flapperNews', ['ui.router'])
	
  // Config
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('post', {
        url: '/post/{id}',
        templateUrl: '/home.html',
        controller: 'MainCtrl'   
      })

    $urlRouterProvider.otherwise('/home');
  }])

  // Factory
  .factory('posts', [function() {
    var data = {
      posts: [
        {title: 'post 1', link: 'adsf', upvotes: 5},
        {title: 'post 2', link: 'fasdf', upvotes: 2},
        {title: 'post 3', link: 'fasd', upvotes: 15},
        {title: 'post 4', link: '', upvotes: 9},
        {title: 'post 5', link: '', upvotes: 4}
      ]
    }

    return data
  }])


  // Controller
  .controller('MainCtrl', ['posts', function(posts) {
		var self = this;
    
    self.posts = posts.posts;

    self.addPost = function() {
      if(!self.title || self.title === '') { return; }
      self.posts.push({title: self.title, link: self.link, upvotes: 4});
      self.title = '';
      self.link = ''
    };

    self.addVote = function(post) {
      post.upvotes += 1;
    };

	}]);