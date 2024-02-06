







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









          // <>form validation<>

const form = document.querySelector('form');
let userParent = document.querySelector('.The-User');
let userInput = document.querySelector('#UserName');
let NumberParent = document.querySelector('.The-Number');
let numberInput = document.querySelector('#Contact');
let emailParent = document.querySelector('.The-Mails');
let emailInput = document.querySelector('#Sending');

let textParent = document.querySelector('.The-Message');
let textInput = document.querySelector('#Message');
let Signal = document.querySelector('.signal');

let formheading = document.querySelector('.heading-divs');
let contactTop = document.querySelector('.contact-top')




    function UsernameCheck(){
                const NamePattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
                if(!userInput.value.match(NamePattern)){
                  return userParent.classList.add("invalid")
                }
                userParent.classList.remove("invalid")
    }


    function NumberChecking(){

      const numberPattern = /^[0-9]{10}$/;

              if(!numberInput.value.match(numberPattern)){
                   return NumberParent.classList.add("invalid")
              }  
              NumberParent.classList.remove("invalid")
    } 



    function EmailChecking(){
             const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

             if(!emailInput.value.match(emailPattern)){
                   return emailParent.classList.add("invalid")
             }
             emailParent.classList.remove("invalid")
    } 


    function Textchecking(){
                let textValue = textInput.value.length
                Signal.textContent = textValue;

                if(textValue > 0){
                    return textParent.classList.add("valid");
                }
                textParent.classList.remove("valid");
                  
                if(textValue > 100){
                     return  textParent.classList.add("error");
                }
                textParent.classList.remove("error");
    }

     form.addEventListener('submit',function(e){
          e.preventDefault();
          UsernameCheck();
          NumberChecking();
          EmailChecking();
          Textchecking();
          userInput.addEventListener('keyup',UsernameCheck())
          numberInput.addEventListener('keyup',NumberChecking())
          emailInput.addEventListener('keyup',EmailChecking())
          textInput.addEventListener('keyup',Textchecking())

          if(
              !userParent.classList.contains("invalid") &&
              !NumberParent.classList.contains("invalid") &&
              !emailParent.classList.contains("invalid") &&
              !textParent.classList.contains("error")
          ){
                    
               
                    form.style.opacity = '0'
                        form.style.display = 'none'
                 

                  setTimeout(function(){
                          formheading.style.display = 'block'
                          contactTop.style.height = '400px'


                          setTimeout(function(){
                            formheading.style.display = 'none'
                            form.style.opacity = '1'
                            formheading.opacity = '0'
                            form.style.display = 'block'
                            contactTop.style.height = '700px'
                            form.reset()
                     },2000)
                  })         
                   
          }
})



       




        


        