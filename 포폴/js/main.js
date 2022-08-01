$(document).ready(function(){

    $('.gnb-ul > li > a').on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.gnb-ul li.intro').click(function(){
		$('html, body').animate({
			scrollTop: $('.main-visual-box').offset().top //화면상에서 특정 요소의 y축 위치 알아내고자 할 때 사용
		}, 800);
	});

    $('.gnb-ul li.aboutMe').click(function(){
		$('html, body').animate({
			scrollTop: $('.main-content-box01').offset().top //화면상에서 특정 요소의 y축 위치 알아내고자 할 때 사용
		}, 800);
	});

    $('.gnb-ul li.abiliy').click(function(){
		$('html, body').animate({
			scrollTop: $('.main-content-box02').offset().top //화면상에서 특정 요소의 y축 위치 알아내고자 할 때 사용
		}, 800);
	});

    $('.gnb-ul li.portfolio').click(function(){
		$('html, body').animate({
			scrollTop: $('.main-content-box03').offset().top //화면상에서 특정 요소의 y축 위치 알아내고자 할 때 사용
		}, 800);
	});

	$('.scroll-top').click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});
    

    /*모바일 gnb*/
        $(".btn-m-menu").click(function (e) {
            mMenuOpen();
            $(".m-gnb .gnb-ul li").addClass('active');
        });
    
        $(".slide-close").click(function () {
            mMenuClose();
        });
    
        $(window).resize(function () {
            if ($(window).width() > 1024) {
                $(".slideMenu").hide();
                $(".slide-close").hide();
            }
        });
    
        function mMenuOpen() {
            $(".slideMenu").stop(true, true).animate({
                left: "0"
            }, 300);
            $(".slideMenu").show();
            $(".slide-close").show();
        };
    
        function mMenuClose() {
            $(".slideMenu").stop(true, true).animate({
                left: "-100%"
            });
            $(".slideMenu").hide(100);
            $(".slide-close").hide();
        }

        var $header = $('header'); //헤더를 변수에 넣기
        var $changeHeader = $('.main-content-box01'); //색상이 변할 부분
        var $window = $(window);
        var headerOffsetTop = $changeHeader.offset().top;//색상 변할 부분의 top값 구하기
        
        $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
            headerOffsetTop = $changeHeader.offset().top;
        });
        
        $window.on('scroll', function(){ //스크롤시
          var scrolled = $window.scrollTop() >= headerOffsetTop; //스크롤된 상태; true or false
          $header.toggleClass('down', scrolled); //클래스 토글
        });
});
