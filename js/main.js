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


// Tour Price 
(function () {
  const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
  birthday = dayMonth + nextYear;
  }
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    
  
      const now = new Date().getTime(),
              distance = countDown - now;
  
      document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
      if (distance < 0) {
          document.getElementById("headline").innerText = "Hết khuyễn mãi rồi";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
      }
      }, 0)
  }());