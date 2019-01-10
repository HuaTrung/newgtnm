var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});


var list_movies = [{
  id: 1, title: 'Gravity (2013)',time:"91 min",imagePath:"https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/gravity-2013.jpg",
rate:"4.1",option:["Sci-Fi","Thriller","Drama"]},
  {  id: 2, title: 'The Hobbit: The Desolation of Smaug (2013)',time:"169 min",imagePath:"https://cdn3.movieweb.com/i/movie/Xv9dGlE1H4wh7bWH1do4wH6XhgLaJX/384:50/The-Hobbit-The-Desolation-Of-Smaug.jpg",
  rate:"5.0",option:["Adventure"," Fantasy "," Drama"]},
  {  id: 3, title: 'The Hunger Games: Catching Fire (2013)',time:"146 min",imagePath:"https://upload.wikimedia.org/wikipedia/commons/a/a8/170303_%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4.jpg",
  rate:"4.5",option:["Sci-Fi","Thriller","Drama"]},
  {id: 4, title: 'Thor: The Dark World (2013)',time:"91 min",imagePath:"http://image.phimmoi.net/film/255/poster.medium.jpg",
rate:"5.0",option:["Action", "Adventure" , "Fantasy"]},
{id: 5, title: 'World War Z (2013)',time:"116 min",imagePath:"https://m.media-amazon.com/images/M/MV5BMTYyMDgxNzkyM15BMl5BanBnXkFtZTcwMjk3NzQzOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
rate:"4.7",option:["Action", "Adventure" , "Horoor"]},
{id: 6, title: 'Prisoners (2013)',time:"153 min",imagePath:"data:image/jpeg;base64,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",
rate:"4.8",option:["Crime" , "Thriller" , "Drama"]},
{id: 7, title: 'This Is the End (2013)',time:"107 min",imagePath:"https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_.jpg",
rate:"5.0",option:["Comedy", "Adventure" , "Fantasy"]},
{id: 8, title: 'The Internship (2013)',time:"112 min",imagePath:"data:image/jpeg;base64,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",
rate:"4.5",option:["Action", "Adventure" , "Fantasy"]}];

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
