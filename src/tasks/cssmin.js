module.exports = {
  test: {                                      // Target
      files: [
	{
	  expand: true,
	  cwd: 'dist/assets/css',
	  src: 'style.css',
	  dest: 'dist/assets/css',
      ext:'.min.css'  
	}
      ]
    }
}; 
