var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(8080,function(){
    console.log('Node server running @ http://localhost:3000')
});


var list_movies = [{
  id: 1, title: 'Gravity (2013)',time:"91 min",imagePath:"https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/gravity-2013.jpg",
rate:"4.1",option:["Sci-Fi","Thriller","Drama"],class:"movie movie--test movie--test--dark movie--test--left",price:"60000 VNĐ"},
  {  id: 2, title: 'The Desolation (2013)',time:"169 min",imagePath:"https://cdn3.movieweb.com/i/movie/Xv9dGlE1H4wh7bWH1do4wH6XhgLaJX/384:50/The-Hobbit-The-Desolation-Of-Smaug.jpg",
  rate:"5.0",option:["Adventure"," Fantasy "," Drama"],class:"movie movie--test movie--test--dark movie--test--left",price:"80000 VNĐ"},
  {  id: 3, title: 'Catching Fire (2013)',time:"146 min",imagePath:"https://upload.wikimedia.org/wikipedia/commons/a/a8/170303_%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4.jpg",
  rate:"4.5",option:["Sci-Fi","Thriller","Drama"],class:"movie movie--test movie--test--dark movie--test--right",price:"70000 VNĐ"},
  {id: 4, title: 'Thor: The Dark World',time:"91 min",imagePath:"http://image.phimmoi.net/film/255/poster.medium.jpg",
rate:"5.0",option:["Action", "Adventure" , "Fantasy"],class:"movie movie--test movie--test--dark movie--test--right",price:"90000 VNĐ"},
{id: 5, title: 'World War Z (2013)',time:"116 min",imagePath:"https://m.media-amazon.com/images/M/MV5BMTYyMDgxNzkyM15BMl5BanBnXkFtZTcwMjk3NzQzOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
rate:"4.7",option:["Action", "Adventure" , "Horoor"],class:"movie movie--test movie--test--dark movie--test--left",price:"50000 VNĐ"},
{id: 6, title: 'Prisoners (2013)',time:"153 min",imagePath:"https://www.dvdsreleasedates.com/posters/800/P/Prisoners-2013-movie-poster.jpg",
rate:"4.8",option:["Crime" , "Thriller" , "Drama"],class:"movie movie--test movie--test--dark movie--test--left",price:"60000 VNĐ"},
{id: 7, title: 'This Is the End (2013)',time:"107 min",imagePath:"https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_.jpg",
rate:"5.0",option:["Comedy", "Adventure" , "Fantasy"],class:"movie movie--test movie--test--dark movie--test--right",price:"50000 VNĐ"},
{id: 8, title: 'The Internship (2013)',time:"112 min",imagePath:"https://img.reelgood.com/content/movie/cfa8db1c-8cc3-46e4-9084-f678b0fdd9bf/poster-780.jpg",
rate:"4.5",option:["Action", "Adventure" , "Fantasy"],class:"movie movie--test movie--test--dark movie--test--right",price:"60000 VNĐ"}];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/list-moives', function(req, res) {
  res.json({list_movies:list_movies});
});

app.get('/:id', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/movie-detail.html'));
});

app.get('/detail/:id', function(req, res) {
  res.json({movie:list_movies[parseInt(req.params.id-1)]});
});
