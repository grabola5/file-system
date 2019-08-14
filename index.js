var fs = require('fs');

fs.readdir('.', 'utf-8', function(err, files) {
	var content = files;
	console.log ('Content read');
	console.log(content);
		fs.writeFile('./towrite.txt', content, function (err) {
			if (err) throw err;
			console.log('Content saved');
	}); 
});