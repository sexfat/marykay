const {
    src,
    dest
} = require('gulp');

//路徑參數
const config = require('../gulp.config');


module.exports = function fonts() {
    return src(config.paths.fonts)
        .pipe(dest(config.pathsDev.fonts))
}




