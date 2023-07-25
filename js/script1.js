let email = document.getElementById("email");
let eMes = document.getElementById("eMes");
let pwArea = document.getElementById("pwArea");
let pwMes = document.getElementById("pwMes");
let pwArea2 = document.getElementById("pwArea2");
let pwMes2 = document.getElementById("pwMes2");
let name = document.getElementById("name");
let nameMes = document.getElementById("nameMes");

let regpw = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[!@#$%^&*]).*$/;
let regname = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,30}$/;
let regemail = /^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/;


$(document).ready(function(){
  $('.eyes').on('click',function(){
      $('input').toggleClass('active');
      if($('input').hasClass('active')){
          $(this).attr('class',"eyes")
          .prev('input').attr('type',"text");
      }else{
          $(this).attr('class',"eyes")
          .prev('input').attr('type','password');
      }
  });
});
email.addEventListener('focus',function(){
  $(".message1").addClass("off");
})
pwArea.addEventListener('focus',function(){
  $(".message2").addClass("off");
})
pwArea2.addEventListener('focus',function(){
  $(".message3").addClass("off");
})
name.addEventListener('focus',function(){
  $(".message4").addClass("off");
})

// ? 없거나 있거나
// * 없거나 있거나 많거나
// + 하나 또는 많이

document.getElementById("submit").onclick = function () {
  if (!regemail.test(email.value)) {
    $(".message1").removeClass("off");
    return false;
  } else if (!regpw.test(pwArea.value)) {
    $(".message2").removeClass("off");
    return false;
  } else if (pwArea2.value != pwArea.value) {
    $(".message3").removeClass("off");
    return false;
  } else if(!regname.test(name.value)){
    $(".message4").removeClass("off");
    return false;
  } else{
    location.href = "login.html";
  }
};

var onloadCallback = function() {
  grecaptcha.render('html_element', {
    'sitekey' : 'your_site_key'
  });
};