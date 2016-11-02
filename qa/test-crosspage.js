var Browser = require('zombie'), 
	assert = require('chai').assert; 

var browser; 
suite('Cross-Page Tests', function(){
	
	setup(function(){
		browser = new Browser(); 
	}); 

	test('requesting a group rate from the hood river tour page should'+ 
		'populate the hidden referrer field', function(done){
			var referrer = 'http://localhost:3000/tours/hood-river';
			browser.visit(referrer, function(){
				browser.clickLink('.requestGroupLink', function(){
					assert(browser.field('referrer').value === referrer); 
					done();
				});
			});
		});

	test('requesting a group rate from the oregon coast tour page '+
		'populate the hidden referrer field', function(done){
			var referrer = 'http://localhost:3000/tours/oregon-coast'; 
			browser.visit(referrer, function(){
				browser.clickLink('.requestGroupLink', function(){
					assert(browser.field('referrer').value === referrer); 
					done();
				});
			});
		});

	test('visting the "request group rate" page directly should not '+
		'have a value in the referrer field', function(done){
			browser.visit('http://localhost:3000/tours/request-group-rate', function(){
				assert(browser.field('referrer').value === '');
				done();
			} 
		})
})