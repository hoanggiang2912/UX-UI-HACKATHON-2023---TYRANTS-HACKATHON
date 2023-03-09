/* SideBarMini */
var toggleBtn = document.querySelector('.sidebarMini__button');
    var sidebarMini = document.querySelector('.sidebarMini');
    var switchBtn = document.querySelector('#checkbox');

    toggleBtn.addEventListener('click',function(){
        sidebarMini.classList.toggle('is-opened');
    });

    switchBtn.addEventListener('click',function(){
        document.querySelector('body').classList.toggle('darkMode');
    });

/* BackToTop */
var btn = $('#backToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    
  } else {
    btn.removeClass('show');
  }
  
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
  
});

// Header Fixed

window.onscroll = function () {
    //Code tạo hiệu ứng xuất hiện thanh màu đen khi scroll
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // translate(-50%,0)
        document.getElementById("headerFixed").style.transform = "translate(-50%,0)";
    } else {
        document.getElementById("headerFixed").style.transform = "translate(-50%,-100%)";
    }
}

