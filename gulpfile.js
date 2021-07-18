const {
    src,
    series,
    dest,
    parallel,
    watch
} = require('gulp');




//把模組載入

const clean = require('./tasks/clean');
const styles = require('./tasks/sassStyle');
const html = require('./tasks/html_template');
const jsBabel = require('./tasks/jsBabel');
const concats = require('./tasks/concat');
const images = require('./tasks/images');
const server = require('./tasks/server');
const zipfile = require('./tasks/zip');
const img = require('./tasks/img');
const php = require('./tasks/phpconnect');


exports.default =  series(img ,parallel(server));
exports.package =  series(clean, images , concats , parallel(zipfile));
exports.imgs = img

// exports.default = server ;


// series(clear,styleSass,parallel(htmlTemplate ,prefix, img, babeles5));

