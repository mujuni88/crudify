var expect = require('expect.js'),
	sa = require('superagent');

var PORT = 3000,
	URL = 'http://localhost:'+PORT;

	describe('server', function(){

		it('should get the default  index.html file on directory', function(){
			sa.get(URL).end(function(err, resp){
				console.log("Testing "+resp)
				
				// expect no error
				expect(err).to.eql(null);

				// expect body to contain somehting

				done();
			});
		});
	});