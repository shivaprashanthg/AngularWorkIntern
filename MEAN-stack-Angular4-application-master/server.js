var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken');
var config = require('./server/config');

var user = require('./server/routes/user.js');
var expense = require('./server/routes/expense.js');

var port = process.env.PORT || config.serverport;

var path =require("path");

mongoose.connect(config.database, function(err){
	if(err){
		console.log('Error connecting database, please check if MongoDB is running.');
	}else{
		console.log('Connected to database...');
	}
});

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('body-parser').json({ type : '*/*' }));
// use morgan to log requests to the console
app.use(morgan('dev'));

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
// app.use(express.static(__dirname+"/dist"));
app.use(express.static('dist'));


// basic routes

app.get('/', function(req, res) {
	// res.render('index.html');
  res.sendFile("index.html");

});

app.post('/register', user.signup);

// express router
var apiRoutes = express.Router();

app.use('/api', apiRoutes);

apiRoutes.post('/login', user.login);

apiRoutes.use(user.authenticate); // route middleware to authenticate and check token

// authenticated routes
apiRoutes.get('/', function(req, res) {
	res.status(201).json({ message: 'Welcome to the authenticated routes!' });
});

apiRoutes.get('/user/:id', user.getuserDetails); // API returns user details

apiRoutes.put('/user/:id', user.updateUser); // API updates user details

apiRoutes.put('/password/:id', user.updatePassword); // API updates user password

apiRoutes.post('/expense/:id', expense.saveexpense); // API adds & update expense of the user

apiRoutes.delete('/expense/:id', expense.delexpense); //API removes the expense details of given expense id

apiRoutes.get('/expense/:id', expense.getexpense); // API returns expense details of given expense id

apiRoutes.post('/expense/total/:id', expense.expensetotal); // API returns expense details of given expense id

apiRoutes.post('/expense/report/:id', expense.expensereport); //API returns expense report based on user input



// kick off the server
app.listen(port);
console.log('Expense Watch app is on listening ' + port);







// <h2>Here are some links to help you start: </h2>
// <ul>
//   <li>
//     <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
//     </li>
//   <li>
//     <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
//   </li>
//   <li>
//     <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
//   </li>
// </ul>

//<router-outlet></router-outlet>
