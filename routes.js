//Not used in Code

var express =('express');


var app =express();

app.get('/index', function(req, res){
  res.send('<h1>Hello World</h1>')

});


app.get('/About', function(req,res){

  re.send('this is the about page')

})

app.get('/Team', function(req,res){

  re.send('this is team page')

})


app.get('/Interest', function(req,res){

  re.send('this is Interest page')

})

app.get('/Projects', function(req,res){

  re.send('this is Projects page')

})

app.get('/Publications', function(req,res){

  re.send('this is Publications page')

})

app.get('/ContactUs', function(req,res){

  re.send('this is ContactUs page')

})


app.listen(3000, function)(){
  console.log('example app listening on port 3000')
});
