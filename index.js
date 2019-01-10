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
  {  id: 2, title: 'Gravity (2013)',time:"91 min",imagePath:"https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/gravity-2013.jpg",
  rate:"4.1",option:["Sci-Fi","Thriller","Drama"]},
  {  id: 3, title: 'Gravity (2013)',time:"91 min",imagePath:"https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/gravity-2013.jpg",
  rate:"4.1",option:["Sci-Fi","Thriller","Drama"]},
  {id: 4, title: 'Gravity (2013)',time:"91 min",imagePath:"https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/gravity-2013.jpg",
rate:"4.1",option:["Sci-Fi","Thriller","Drama"]}];

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
