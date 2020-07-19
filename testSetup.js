// this file isnt transpiled so use commonJs and ES5 
// Register babel to transpoile before our tests run 

require('@babel/register')({
	presets:['env']
}); 

//disable webpack features that Mocha doesn't understand 

require.extensions['.css'] = function() {} ; // this makes the code line require.extensions['.css'] an empty function 
