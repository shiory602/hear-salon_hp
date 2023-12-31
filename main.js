////////////////////
/* ハンバーガーmenu */
////////////////////
// 追従ナビ・スマホでハンバーガーメニューになる
$(".nav_toggle").on("click", function () {
  $(".nav_toggle, .nav").toggleClass("show");
});
$(".nav_menu_li").on("click", function () {
  $(".nav_toggle, .nav").toggleClass("show");
});

// ゆっくりスクロールする
// $(function(){
//   $('a[href^="#"]').click(function() {
//     var adjust = 0;
//     var speed = 1200;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top + adjust;
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });
// });

//////////////////
/* slider の設定 */
//////////////////

function slideSwitch() {
  var $active = $('#slideshow img.active');

  if ( $active.length == 0 ) $active = $('#slideshow img:last');

  var $next =  $active.next().length ? $active.next()
      : $('#slideshow img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
      });
}

$(function() {
  setInterval( "slideSwitch()", 5000 );
});




////////////////////////
/* スクロールアップの設定 */
////////////////////////
$(function() {
  // 変数にクラスを入れる
  var btn = $('.pageTop');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  
  //フッターの手前でボタンを止める
  $(window).on('load scroll', function(){
    var height = $(document).height(), //ドキュメントの高さ 
        position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
        footer = $('footer-inr').height(); //フッターの高さ
    if ( height - position  < footer ){ 
      btn.addClass('absolute');
    } else { 
      btn.removeClass('absolute');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});