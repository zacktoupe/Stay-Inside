var activity = [
'Blanket Fort',
'Draw or Doodle',
'The Floor is Lava',
'Board Game Night',
'Bubble Bath',
'Hot Cocoa/Coffee/Tea Party',
'Cook or Bake'
]

var food = [
'Japanese',
'Chinese',
'Mexican',
'Indian',
'Greek',
'Mediterrenean',
'Italian',
'Spanish',
'Korean',
'American'
]

var movie = [
'Horror',
'Action',
'Drama',
'Fantasy',
'Adventure',
'Mystery',
'Thriller',
'War',
'Crime',
'Romance',
'Superhero',
'Romcom',
'Documentary',
'Sci-fi',
'Disaster',
'Comedy',
'Musical'
]


function food() {
     var randomNumber = Math.floor(Math.random() * (food.length));
	 document.getElementById('foodDisplay').innerHTML = food[randomNumber];
}

function activity() {
     var randomNumber1 = Math.floor(Math.random() * (activity.length));
	 document.getElementById('activityDisplay').innerHTML = food[randomNumber1];
}

function movie() {
     var randomNumber2 = Math.floor(Math.random() * (movie.length));
	 document.getElementById('movieDisplay').innerHTML = food[randomNumber2];
}