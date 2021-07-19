let basePaths = 'src';
let savePaths = 'dist';

let baseConfig = {
    //來源檔案
    paths: {
        html: [ basePaths + '/*.html' , basePaths + '/**/*.html' , '!' + basePaths + '/layout/*.html'  , '!' + basePaths + '/section/*.html'],
        php:  basePaths + '/*.php',
        css:  basePaths + '/sass/*.scss',
        js: basePaths + '/js/*.js' ,
        images: [basePaths + '/images/*.*' , basePaths + '/images/**/*.*'],
        fonts: basePaths + '/fonts/*.*'
    },
    //目的地
    pathsDev : {
        dist : savePaths,
        html:  savePaths  + '/*.html' ,
        php:   savePaths  + '/*.php' ,
        css:   savePaths + '/css/',
        js:   savePaths  + '/js/' ,
        images: savePaths + '/images/',
        fonts: savePaths + '/fonts'
    },
    //監看檔案
    pathsWatch : {
       html: [basePaths + '/*.html' , basePaths + '/**/*.html' ,  '!' + savePaths + '/*.html'],  //排除
       scss: [basePaths + '/*.scss' , basePaths + '/**/*.scss'], 
       js: [basePaths + '/*.js' , basePaths + '/**/*.js'], 
       php: [basePaths + '/*.php' , basePaths + '/**/*.php'], 
    },
    pathsConfig : {
       index : 'index.html' , // browserSync 首頁位址
       dist : [savePaths + '/*' , savePaths + '/**/*.*'],
       package  : './package' //打包路徑
    }
}


//要輸出
module.exports = baseConfig