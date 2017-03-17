var app = angular.module('flapperNews', [])
	.controller('MainCtrl', [function() {
		var self = this;
		self.test = 'Hello world!';
    self.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];
    self.incrementPost = function() {
      self.posts.push({title: self.title, upvotes: 4});
    };
	}]);