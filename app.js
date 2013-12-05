
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

//Programs
app.get('/whatIsAMicropayment', routes.whatIsAMicropayment);
app.get('/history', routes.history);
app.get('/challenges/technical', routes.technical);
app.get('/challenges/economical', routes.economical);
app.get('/challenges/social', routes.social);
app.get('/businessModels/payPerUse', routes.payPerUse);
app.get('/businessModels/postPaid', routes.postPaid);
app.get('/businessModels/prePaid', routes.prePaid);
app.get('/caseStudies/flattr', routes.flattr);
app.get('/caseStudies/paypal', routes.paypal);
app.get('/caseStudies/venmo', routes.venmo);
app.get('/caseStudies/zong', routes.zong);
// In case of bad routing
//app.get('/*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
