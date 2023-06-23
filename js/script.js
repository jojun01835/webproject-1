$(function () {
  var $slider = $(".section_b"),
    $firstSlide = $slider
      .find("div")
      .first() // 첫번째 슬라이드
      .stop(true)
      .animate({ opacity: 1 }, 200); // 첫번째 슬라이드만 보이게 하기

  function PrevSlide() {
    // 이전버튼 함수
    stopSlide();
    startSlide(); //타이머 초기화
    var $lastSlide = $slider
      .find("div")
      .last() //마지막 슬라이드
      .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기
    $secondSlide = $slider
      .find("div")
      .eq(1) //두 번째 슬라이드 구하기
      .stop(true)
      .animate({ opacity: 0 }, 400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $firstSlide = $slider
      .find("div")
      .first() //맨 처음 슬라이드 다시 구하기
      .stop(true)
      .animate({ opacity: 1 }, 400); //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }

  function NextSlide() {
    // 다음 버튼 함수
    stopSlide();
    startSlide(); //타이머 초기화
    $firstSlide = $slider
      .find("div")
      .first() // 첫 번째 슬라이드
      .appendTo($slider); // 맨 마지막으로 보내기
    var $lastSlide = $slider
      .find("div")
      .last() // 맨 마지막으로 보낸 슬라이드
      .stop(true)
      .animate({ opacity: 0 }, 400); // fadeOut시키기
    $firstSlide = $slider
      .find("div")
      .first() // 맨 처음 슬라이드
      .stop(true)
      .animate({ opacity: 1 }, 400); // fadeIn 시키기
  }

  $(".right").on("click", function () {
    //다음버튼 클릭
    NextSlide();
  });
  $(".left").on("click", function () {
    //이전 버튼 클릭
    PrevSlide();
  });
  $(".stop").on("click", function () {
    stopSlide();
  });
  $(".play").on("click", function () {
    startSlide();
  });

  startSlide(); // 자동 슬라이드 시작

  var theInterval;

  function startSlide() {
    theInterval = setInterval(NextSlide, 3000); //자동 슬라이드 설정
  }

  function stopSlide() {
    //자동 멈추기
    clearInterval(theInterval);
  }

  $(".active").hover(
    function () {
      //마우스 오버시 슬라이드 멈춤
      stopSlide();
    },
    function () {
      startSlide();
    }
  );
});
$(document).ready(function () {
  var jbOffset = $("#headwrap").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > jbOffset.top) {
      $("#headwrap").addClass("fix");
      $(".depth1 li a").css({ color: "#fff" });
      $(".main_nav_tap").css({ width: "12%" });
      $(".depth1 li a").css({ height: "80px" });
      $(".depth1").css({ height: "80px" });
      $(".depth1").css({ "line-height": "-80px" });
      $("#nav_logo").addClass("remove");
      $(".hd_nav li").addClass("remove");
      $(".depth1 > li > .width100").css({ top: "80px" });
      $(".depth1 > li > .width100_2").css({ top: "80px" });
      $(".depth1 > li > .width100_3").css({ top: "80px" });
      $(".depth1 > li > .width100_4").css({ top: "80px" });
      $(".depth1 > li > .width100_5").css({ top: "80px" });
      $(".depth1 > li > .width100_6").css({ top: "80px" });
      $(".depth1 > li > .width100_7").css({ top: "80px" });
      $(".title").css({ color: "black" });
      $(".title_s").css({ color: "black" });
      $(".title_s .text").css({ color: "black" });
      $(".text a").css({ color: "black" });
      $(".main_nav_tap").css({ "margin-top": "-20px" });
      $(".logo2").css({ display: "block" });
    } else {
      $("#headwrap").removeClass("fix");
      $("#nav_logo").removeClass("remove");
      $(".hd_nav li").removeClass("remove");
      $(".depth1 li a").css({ color: "#000" });
      $(".width100").css({ top: "240px" });
      $(".width100_2").css({ top: "240px" });
      $(".width100_3").css({ top: "240px" });
      $(".width100_4").css({ top: "240px" });
      $(".width100_5").css({ top: "240px" });
      $(".width100_6").css({ top: "240px" });
      $(".width100_7").css({ top: "240px" });
      $(".logo2").css({ display: "none" });
      $(".main_nav_tap").css({ width: "14%" });
    }
  });
});

var CDate = new Date();
var today = new Date();
let now;
var selectCk = 0;
let next = document.getElementsByClassName("cal_right_btn");
let prev = document.getElementsByClassName("cal_left_btn");
var buildcalendar = function () {
  var htmlDates = "";
  let dayAry = document.querySelectorAll(".cal_day_list li");
  now = CDate.getDate();
  var prevLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0); //지난 달의 마지막 날
  var thisFirst = new Date(CDate.getFullYear(), CDate.getMonth(), 1); //이번 달의 첫쨰 날
  var thisLast = new Date(CDate.getFullYear(), CDate.getMonth() + 1, 0); //이번 달의 마지막 날
  document.querySelector(".year").innerHTML = CDate.getFullYear(); // year에 년도 출력
  document.querySelector(".month").innerHTML = CDate.getMonth() + 1; //month에 월 출력

  dayAry.forEach(function (index, element) {
    if (element == now) {
      dayAry[element - 1].classList.add("today");
    } else {
      return false;
    }
  });
};
buildcalendar();
var count = 1;
var yearcount = 1;
$(".cal_right_btn").on("click", function () {
  let DDate = new Date();
  let Last = DDate.getFullYear();
  let First = DDate.getMonth() + 1;
  $(".month").html((First += count++));
  if (First == 13) {
    $(".month").html((First = 1));
    count = 1;
    $(".year").html((Last += yearcount));
    yearcount++;
  }
});
$(".cal_left_btn").on("click", function () {
  let DDate = new Date();
  let Last = DDate.getFullYear();
  let First = DDate.getMonth() + 1;
  $(".month").html((First += count--));
  if (First == 1) {
    $(".month").html((First = 12));
    count = 1;

    $(".year").html((Last += --yearcount));
  }
});

$(".cal_day_list li").hover(
  function () {
    $(this).addClass("today");
  },
  function () {
    $(this).removeClass("today");
  }
);
var index = $(".alt_cont ul").index() + 1;
$(".up").click(function (e) {
  $(".alt_cont ul li a").removeClass("on");
  $(".alt_cont > ul > li > a:eq(" + index + ")").addClass("on");
  index += 1;
  if (index == 5) {
    index = 0;
    console.log(index);
  }
});
$(".down").click(function (e) {
  $(".alt_cont ul li a").removeClass("on");
  $(".alt_cont > ul > li > a:eq(" + index + ")")
    .addClass("on")
    .slideDown(500);
  index -= 1;
  if (index == 1) {
    return false;
  }
});

$(function () {
  $(".slider-div").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 5, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: "<button type='button' class='slick-prev'></button>", // 이전 화살표 모양 설정
    nextArrow: "<button type='button' class='slick-next'></button>", // 다음 화살표 모양 설정
    // dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부
  });
});

// 공지사항

$(".menu30 li:eq(0)").click(function (e) {
  e.preventDefault();
  $(".menu30 li").removeClass("select_on");
  $(this).addClass("select_on");
  $(".menu_main_1").removeClass("gallery_off");
  $(".menu_main_2").addClass("gallery_off");
  $(".menu_main_3").addClass("gallery_off");
  $(".menu_main_4").addClass("gallery_off");
});

$(".menu30 li:eq(1)").click(function (e) {
  e.preventDefault();
  $(".menu30 li").removeClass("select_on");
  $(this).addClass("select_on");
  $(".menu_main_2").removeClass("gallery_off");
  $(".menu_main_1").addClass("gallery_off");
  $(".menu_main_3").addClass("gallery_off");
  $(".menu_main_4").addClass("gallery_off");
});
$(".menu30 li:eq(2)").click(function (e) {
  e.preventDefault();
  $(".menu30 li").removeClass("select_on");
  $(this).addClass("select_on");
  $(".menu_main_3").removeClass("gallery_off");
  $(".menu_main_1").addClass("gallery_off");
  $(".menu_main_2").addClass("gallery_off");
  $(".menu_main_4").addClass("gallery_off");
});
$(".menu30 li:eq(3)").click(function (e) {
  e.preventDefault();
  $(".menu30 li").removeClass("select_on");
  $(this).addClass("select_on");
  $(".menu_main_4").removeClass("gallery_off");
  $(".menu_main_1").addClass("gallery_off");
  $(".menu_main_2").addClass("gallery_off");
  $(".menu_main_3").addClass("gallery_off");
});

$(document).ready(function () {
  var slider = $(".bxslider").bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 400,
    slideHeight: 100,
    slideMargin: 10,
    moveSlides: 1,
    pager: true,
    controls: false,
    auto: true,
    pause: 3000, // 각 슬라이드 간의 딜레이 시간 (밀리초 단위)
    speed: 500,
  });
});

$(document).ready(function () {
  $(".bxslider2").bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 400,
    slideHeight: 100,
    slideMargin: 10,
    moveSlides: 1,
    pager: true,
    controls: false,
    auto: true,
    pause: 3000, // 각 슬라이드 간의 딜레이 시간 (밀리초 단위)
    speed: 500,
  });
});
