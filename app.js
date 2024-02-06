



let pageContainer = document.querySelector('.outer-content');
let cursor = document.querySelector('.mouse-div');

Movingcursor()

        function Movingcursor(){
                    pageContainer.addEventListener('mousemove',function(details){
                           gsap.to(cursor,{
                            left:details.x-40+'px',
                            top:details.y-40+'px',
                            ease:'power2'
                           })
                    })

                    pageContainer.addEventListener('mouseleave',function(dets){
                                gsap.to(cursor,{
                                      opacity:'0'
                                })
                    })  

                    pageContainer.addEventListener('mouseenter',function(dets){
                            gsap.to(cursor,{
                                opacity:'1'
                            })
                    })
        }


        
    let buttonOuter = document.querySelector('.btn-outer');
    let secBtn = document.querySelector('.a-outer');
    let ulBtn = document.querySelector('.ul-btn');
    let headerBtns = document.querySelector('.header-btn')
    let flag = 0

    let action = document.querySelector('.action-form');

            function buttons(){

                    ulBtn.addEventListener('mouseover',function(details){
                                gsap.to(buttonOuter,{
                                      scale:'1.7',
                                      ease:'power2'
                                })
                    })

                    ulBtn.addEventListener('mouseleave',function(){
                             gsap.to(buttonOuter,{
                                  scale:'1'
                             })
                    })



                    headerBtns.addEventListener('mouseover',function(dets){
                           gsap.to(secBtn,{
                             scale:'1.3',
                             ease:'power2'
                           })
                    })

                    headerBtns.addEventListener('mouseleave',function(){
                             gsap.to(secBtn,{
                                   scale:'1'
                             })
                    })
            }

            buttons()
           


            function actionbutton(){
                              ulBtn.addEventListener('click',function(det){
                                      let tl = gsap.timeline()

                                      tl.to(action,{
                                          visibility:'visible',
                                      })
                              })
            }


            actionbutton()