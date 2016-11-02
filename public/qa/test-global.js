suite('Global Tests', function(){
	should('make sure the main page has a working title', function(){
		assert(document.title && document.title.match(/\S/) 
			&& document.title.toUpperCase !== 'TODO'); 
	});
});