const {
    src,
    dest
} = require('gulp');

//路徑參數
const config = require('../gulp.config');


module.exports = function img_not() {
    return src(config.paths.images)
        .pipe(dest(config.pathsDev.images))
}




