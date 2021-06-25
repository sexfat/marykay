const {
    src,
    dest
} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

//把路徑載入
const config = require('../gulp.config')


module.exports = function styleSass() {
    return src(config.paths.css)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded" //壓縮css  expanded
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(dest(config.pathsDev.css))
}


// nested (預設的樣式) : 巢狀顯示
// expanded : 不要巢狀
// compact : 簡潔樣式，縮進成一行
// compressed ：壓縮模式