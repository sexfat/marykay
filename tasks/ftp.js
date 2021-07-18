//清除舊有檔案
const {
    src,
    dest
} = require('gulp');



var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );


module.exports =  function ftp() {
 var conn = ftp.create( {
        host:     'ftp.71next.com',
        user:     'mary@71next.com',
        password: 'HedI+Y~*j[K$',
        parallel: 10,
        log:      gutil.log
    } );
 
    var globs = [
        'src/images/video/*.*',
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
 
    return src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html/images' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html/images' ) );
   
}


