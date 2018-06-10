var app = angular
			.module("myapp", [])
			.controller("cardsData", function($scope){
				var more_cards = [
					{
						img: "src/img/img1.jpg",
						title: "Euismod Fermentum Ornare Apple",
						description: "As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required."
					},
					{
						img: "src/img/img1.jpg",
						title: "Euismod Fermentum Ornare Apple",
						description: "As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required."
					}
				];

				var related_articles = [
					{
						img: "src/img/img1.jpg",
						title: "Settled at limited civilly fortune me",
						description: "lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum lorem"
					},
					{
						img: "src/img/img1.jpg",
						title: "Settled at limited civilly fortune me",
						description: "lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum"
					},
					{
						img: "src/img/img1.jpg",
						title: "Settled at limited civilly fortune me",
						description: "lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum"
					},
					{
						img: "src/img/img1.jpg",
						title: "Settled at limited civilly fortune me",
						description: "lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum"
					},
					{
						img: "src/img/img1.jpg",
						title: "Settled at limited civilly fortune me",
						description: "lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum"
					}
				];

				$scope.more_cards = more_cards;
				$scope.related_articles = related_articles;
			});

			