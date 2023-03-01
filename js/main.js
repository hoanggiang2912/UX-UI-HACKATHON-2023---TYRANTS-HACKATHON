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

