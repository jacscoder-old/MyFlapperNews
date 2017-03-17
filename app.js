var app = angular.module('flapperNews', ['ui.router'])
	
  // Config
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      })

    $urlRouterProvider.otherwise('/home');
  }])

  // Factory
  .factory('posts', [function() {
    var data = {
      posts: [
        {title: 'post 1', link: 'adsf', upvotes: 5, comments: [{author: 'A', body: 'dsa', upvotes:4}, {author: 'A', body: 'dsa', upvotes:4}]},
        {title: 'post 2', link: 'fasdf', upvotes: 2, comments: [{author: 'A', body: 'dsa', upvotes:2}]},
        {title: 'post 3', link: 'fasd', upvotes: 15, comments: [{author: 'A', body: 'dsa', upvotes:5}]},
        {title: 'post 4', link: '', upvotes: 9, comments: [{author: 'A', body: 'dsa', upvotes:5 }]},
        {title: 'post 5', link: '', upvotes: 4, comments: [{author: 'A', body: 'dsa', upvotes:5}]}
      ]
    };

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
    }

    self.addVote = function(post) {
      post.upvotes += 1;
    }

	}])

  .controller('PostsCtrl', ['$stateParams', 'posts', function ($stateParams, posts) {
    var self = this;
    
    self.comments = posts.posts[$stateParams.id].comments;

    self.addComment = function() {
      if(self.comment === '') { return; }
      posts.posts[$stateParams.id].comments.push({
        author: 'user',
        body: self.comment,
        upvotes: 1
      })
      self.comment = '';
    }

  }]);