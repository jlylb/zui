module.exports = {
    assemble: {
        files: ['src/templates/pages/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
    },
    less: {
        files: ['src/assets/less/{,*/}*.less'],
        tasks: [ 'less:test','autoprefixer','cssmin']
    },
    script: {
        files: ['src/assets/js/**/*.js'],
        tasks: ['concat', 'uglify']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            'dist/pages/{,*/}*.html',
            'dist/assets/{,*/}*.less',
            'dist/assets/css/{,*/}*.css',
            'dist/assets/{,*/}*.js'
        ]
    }
};
