// 画像の圧縮
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("imagemin", () =>
  gulp
    .src("images/img01.jpg")
    .pipe(imagemin()) // 画像の最適化処理
    .pipe(gulp.dest("dist")) // 最適化済みの画像を書き出すフォルダー
);



// sassのコンパイル
const sass = require("gulp-sass");

gulp.task("sass", () =>
  gulp
    .src("scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("scss")) // cssを書き出すディレクトリの指定
);



// taskの登録
gulp.task("default", gulp.task("imagemin"));
gulp.task("default", gulp.task("sass"));



// 監視タスク
gulp.task( 'sass:watch', function() {
  gulp.watch( 'scss/style.scss', gulp.task( 'sass' ) );
});

