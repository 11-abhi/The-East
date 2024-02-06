


let actionFrmvtn = document.querySelector('.formbtn');   


                        actionbtns=()=>{
                                let closingBtn = document.querySelector('.outer-actionbtn .formbtn');
                                
                                closingBtn.addEventListener('click',function(){
                                        action.style.visibility = 'hidden'
                                })
                        }

                        actionbtns()


                        actinMoving=()=>{


                                 let actionshape = document.querySelector('.outer-shape');
                               
                                let outerBtn2 = document.querySelector('.outera-shape');
                                let actionAnchor = document.querySelector('.frm-anchor')

                                   actionFrmvtn.addEventListener('mouseover',function(){
                                              gsap.to(actionshape,{
                                                  scale:'1.5',
                                                  ease:'power4'
                                              })
                                     })

                                     actionFrmvtn.addEventListener('mouseleave',function(){
                                              gsap.to(actionshape,{
                                                  scale:'1',
                                              })
                                     })



                                     actionAnchor.addEventListener('mouseover',function(){
                                             gsap.to(outerBtn2,{
                                                    scale:'1.4',
                                                    ease:'power4'
                                             })
                                     })


                                     actionAnchor.addEventListener('mouseleave',function(){
                                            gsap.to(outerBtn2,{
                                                    scale:'1'
                                            })
                                     })
                        }


                        actinMoving()


                  
                        
                        function showimg(shwmg){
                                let images = document.querySelectorAll('.action-sec .image')
                                images.forEach(img => img.style.display = 'none')
                                let selectimages = document.getElementById(`image${shwmg}`)  
                                if(selectimages){
                                     selectimages.style.display = 'block'
                                }
                         }
             
             
                         let menimg = document.querySelector('.action-first #men1')
                         let menimg2 = document.querySelector('.action-first #men2')
                         let menimg3 = document.querySelector('.action-first #men3')
                         let menimg4 = document.querySelector('.action-first #treat')
                         let menimg5 = document.querySelector('.action-first #skins')
                         let menimg6 = document.querySelector('.action-first #nail')
                        //  let menimg7 = document.querySelector('.action-first #beauty')

                     
                         menimg.addEventListener('mouseover',function(){
                                   showimg(1)
                         })
                         menimg2.addEventListener('mouseover',function(){
                                  showimg(2)
                         })
                         menimg3.addEventListener('mouseover',function(){
                                  showimg(3)
                         })
                         menimg4.addEventListener('mouseover',function(){
                                  showimg(4)
                         })
                         menimg5.addEventListener('mouseover',function(){
                                  showimg(5)
                         })
                         menimg6.addEventListener('mouseover',function(){
                                  showimg(6)
                         })


                         



                        