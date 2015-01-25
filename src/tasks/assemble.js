module.exports = {

    options: {
        flatten: true,
        assets: '<%= config.assets %>',
        data: '<%= config.data %>',
        partials: ['<%= config.partials %>'],
        layoutdir: '<%= config.layoutdir %>',
        layout: 'default',
        layoutext: '.hbs',
        analytics: '<%= config.analytics %>',
        ads: '<%= config.ads %>',
        marked: {
            breaks: false,
            gfm: true,
            langPrefix: 'language-',
            pedantic: false,
            sanitize: false,
            silent: false,
            smartLists: false,
            smartypants: false,
            tables: true
        }
    },
    main: {
        files: [
            {
                expand: true,
                cwd: '<%= config.pages %>',
                src: ['./{,*/}*.hbs'],
                dest: '<%= config.dest %>/pages'
            }
        ]
    }
};
