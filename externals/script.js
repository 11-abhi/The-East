


        function Swipers(){
            var swiper = new Swiper(".mySwiper", {
                cssMode: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                pagination: {
                  el: ".swiper-pagination",
                },
                mousewheel: true,
                keyboard: true,
              });
        }


        Swipers()




          function toggleBtn(){
                      let toggle = document.querySelector('.mobile-toggle');
                      let primary  = document.querySelector('.primary-nav');
                    let toggle2 = document.querySelector('.Toggle-btn') 


                      toggle.addEventListener('click',function(){
                                  const visibility = primary.getAttribute('data-visible',false)
                                  if(visibility === 'false'){
                                         primary.setAttribute('data-visible',true)
                                         toggle.setAttribute('aria-expanded',true)
                                  }
                                  else if(visibility === 'true'){
                                      primary.setAttribute('data-visible',false)
                                      toggle.setAttribute('aria-expanded',false)

                                      
                                  }
                      })

                      toggle2.addEventListener('click',function(){
                              const visibility = primary.getAttribute('data-visible',false)
                                 if(visibility === 'true'){
                                      primary.setAttribute('data-visible',false)
                                      toggle2.setAttribute('aria-expanded',false)
                                 }

                      })
          }
                  
          
          toggleBtn()
                  

