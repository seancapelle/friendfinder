// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){

	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/view.html'));
})

// Basic route that sends the user first to the AJAX Page
app.get('/survey', function(req, res){

	
	res.sendFile(path.join(__dirname + '/view.html'));
})