module.exports = {
    lib: {
        files: [
            {
                expand: true,
                cwd: 'bower_components/jquery/dist',
                src: ['./**/*.*'],
                dest: 'dist/assets/js'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/js/',
                src: ['./*.*'],
                dest: 'dist/assets/js'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/css/',
                src: ['./*.*'],
                dest: 'dist/assets/css/'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/fonts',
                src: ['./*.*'],
                dest: 'dist/assets/fonts'
            },
            {
               expand: true,
                cwd: 'bower_components/font-awesome/css/',
                src: ['./*.*'],
                dest: 'dist/assets/css'
            },
            {
               expand: true,
                cwd: 'bower_components/font-awesome/fonts/',
                src: ['./*.*'],
                dest: 'dist/assets/fonts'
            },
            {
                'dist/assets/js/plugins/misc/html5shiv.js': ['bower_components/html5shiv/dist/html5shiv.js'],
                'dist/assets/js/plugins/misc/respond.min.js': ['bower_components/respond/dest/respond.min.js'],
                'dist/assets/js/plugins/sparkline/jquery.sparkline.min.js': ['bower_components/jquery.sparkline.min/index.js'],
                'dist/assets/js/plugins/misc/holder.js': ['bower_components/holderjs/holder.js'],
                'dist/assets/js/plugins/moment/moment.min.js': ['bower_components/moment/min/moment.min.js'],
                'dist/assets/js/plugins/modernizr/modernizr.min.js': ['bower_components/modernizr/modernizr.js'],
                'dist/assets/js/plugins/misc/jquery.slimscroll.min.js': ['bower_components/slimscroll/jquery.slimscroll.min.js']
            },
            {
                expand: true,
                cwd: 'bower_components/fullcalendar/dist',
                src: ['./fullcalendar.js','./fullcalendar.min.js'],
                dest: 'dist/assets/js/plugins/fullcalendar'
            },
            {
                expand: true,
                cwd: 'bower_components/morris',
                src: ['./morris.js','./morris.min.js'],
                dest: 'dist/assets/js/plugins/morris'
            },
            {
                expand: true,
                cwd: 'bower_components/fuelux/dist/js',
                src: ['./*.*'],
                dest: 'dist/assets/js/plugins/fuelux'
            },
            {
                expand: true,
                cwd: 'bower_components/fuelux/dist/css',
                src: ['./*.*'],
                dest: 'dist/assets/css/'
            },
            {
                expand: true,
                cwd: 'bower_components/fuelux/dist/fonts',
                src: ['./*.*'],
                dest: 'dist/assets/fonts/'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/js',
                src: ['./bootstrap-datepicker.js'],
                dest: 'dist/assets/js/plugins/bootstrap-datepicker'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/css',
                src: ['./*.*'],
                dest: 'dist/assets/css//bootstrap-datepicker'
            },
            {
                expand: true,
                cwd: 'bower_components/raphael',
                src: ['./raphael.js','./raphael-min.js'],
                dest: 'dist/assets/js/plugins/raphael'
            },
            {
                expand: true,
                cwd: 'bower_components/fullcalendar/dist',
                src: ['./*.css'],
                dest: 'dist/assets/css/fullcalendar'
            },
            {
                expand: true,
                cwd: 'bower_components/jquery-form/',
                src: ['./**/*.*'],
                dest: 'dist/assets/js/plugins/jquery-form'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap-daterangepicker',
                src: ['./daterangepicker.js'],
                dest: 'dist/assets/js/plugins/daterangepicker'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap-daterangepicker',
                src: ['./daterangepicker*.css'],
                dest: 'dist/assets/css/daterangepicker'
            },
            {
                expand: true,
                cwd: 'bower_components/jquery-ui',
                src: ['jquery-ui.js','jquery-ui.min.js'],
                dest: 'dist/assets/js/plugins/jquery-ui'
            },
            {
                expand: true,
                cwd: 'node_modules/screenfull/dist/',
                src: ['./**/*.*'],
                dest: 'dist/assets/js/plugins/screenfull/'
            }
        ]
    }
};
