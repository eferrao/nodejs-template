suite('"About Page" Test', function(){
	test('should link to the About page', function(){
		assert($('a[href]="/contact"').length)
	})
})