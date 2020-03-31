'use strict';

{
  const sample = document.querySelectorAll('.sample'); // 画像が画面内に入ると、sample-animationクラスを追加する
  // 画像が画面から出ると、sample-animationを削除する

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation');
      } else {
        entry.target.classList.remove('img-animation');
      }
    });
  });
  Array.prototype.forEach.call(sample, function (img) {
    observer.observe(img);
  });
}