const hamburgerBtn = document.querySelector('.hamburger'),
      navMenu = document.querySelector(".nav-menu"),
      navClose = document.querySelector(".nav-close"),
    navLinks = document.querySelector('.header .nav .nav-menu .nav-item .nav-link'),
    header = document.querySelector('.header');
    hamburgerBtn.addEventListener('click', ()=>{
        const navLeft = navMenu.getBoundingClientRect().left;
        if(navLeft < 0)  {
            navMenu.classList.add('show');
            header.classList.add('fixed2')
            
        }
})

      navClose.addEventListener('click', ()=>{
          navMenu.classList.remove("show");
          header.classList.remove('fixed2')
      })
  
      $(()=>{
          $(window).on('scroll', ()=>{
              let Top = $(this).scrollTop();
              if(Top > 100){
                  $('.header').addClass("fixed")
              }
              else{
                  $('.header').removeClass("fixed")
              }
          })
        $(".header .nav-menu a").click(function (Kirchiespy) {
            if($(window).width() < 778){
                $(".header .nav-menu").removeClass('show')
            }
        })
        $("#testi-slider").owlCarousel({
            items: 2,
            autoplay: true,
            loop: true,
            delay: 200,
    nav:true,
            dots: false,
            autoplayHoverPause: true,
            navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
          
            itemsToSlide:1,
        
            responsive:{
                0:{
                    items:1
                },
              
        790:{
                    items:1
                },
        
                800:{
                    items:2
                },
            }
    
      
            
    
        });
    
      })
      