const path = require( 'path' );

module.exports = {
	paths: {
		entry: {
			app: path.resolve( process.cwd(), 'src/js', 'app.js' ),
		},
		output: path.resolve( process.cwd(), 'assets/js' ),
	},

	resolver: {
		extensions: [ '.js', '.jsx' ],
	},
};
