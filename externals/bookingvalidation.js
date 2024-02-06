

                 // <----dialogbox---->

                 let AnotherMessage = document.querySelector('.The-LAst');
                 function theDialog(){
                    let ThelastButton = document.querySelector('.The-lastButton');
                    let closebtn = document.querySelector('.Close-btns')

                    
                            
                    ThelastButton.addEventListener('click',()=>{
                                            AnotherMessage.show();
                    })

                    closebtn.addEventListener('click',()=>{
                               AnotherMessage.close();
                    })
                            }
                            theDialog()

















document.addEventListener('DOMContentLoaded', function() {
            const TheForms = document.querySelector('dialog form');
            let usersParent = document.querySelector('.Dinput-Fields');
            let userchild = document.querySelector('#Useridentity');
            let EmailParent = document.querySelector('.Emils');
            let EmailChild = document.querySelector('#User-Email')
            let ContactParent = document.querySelector('.Contacts');
            let ContactChild = document.querySelector('#User-Contact');    











            function TheCheckings(){

                    const UserPattern = /^[A-za-z]*\s{1}[A-Za-z]*$/;

                    if(!userchild.value.match(UserPattern)){
                       return usersParent.classList.add("invalid")
                    }
                      usersParent.classList.remove("invalid");
            }


            function TheEmailChecking(){
                     const EmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

                     if(!EmailChild.value.match(EmailPattern)){
                        return EmailParent.classList.add("invalid");
                     }
                        EmailParent.classList.remove("invalid");
            }


            function TheContact(){
                        const ContactPattern = /^[0-9]{10}$/;
                        if(ContactChild.value.length == 0){
                             return ContactParent.classList.add("invalid")
                        }
                                ContactParent.classList.remove("invalid");

                           if(ContactChild.value.length !== 10){
                            return ContactParent.classList.add("invalid")
                           }     
                           ContactParent.classList.remove("invalid");

                           if(!ContactChild.value.match(ContactPattern)){
                            return ContactParent.classList.add("invalid")
                           }
                           ContactParent.classList.remove("invalid");
            }

            TheForms.addEventListener('submit',(e)=>{
                    e.preventDefault();
                    TheCheckings()
                    TheEmailChecking()
                    TheContact()

                    userchild.addEventListener('keyup',TheCheckings);
                    EmailChild.addEventListener('keyup',TheEmailChecking);
                    ContactChild.addEventListener('keyup',TheContact);


                    if(!usersParent.classList.contains("invalid")&&
                        !EmailParent.classList.contains("invalid") &&
                        !ContactParent.classList.contains("invalid")
                    ){
                        TheForms.innerHTML = '<h1>Thank you for booking.</h1>';
                        TheForms.style.display = 'flex'
                        TheForms.style.justifyContent = 'center'
                        TheForms.style.alignItems = 'center'
                        TheForms.style.flexDirection = 'column'
                        TheForms.style.fontSize = '1.125rem'
                        TheForms.style.color = '#2563eb'

                        var create = document.createElement('p');
                        create.style.color = '#2563eb'
                        create.textContent = 'Your reservation is confirmed'

                        TheForms.appendChild(create)

                        setTimeout(function(){
                        location.reload()
                        AnotherMessage.close()    
                        TheForms.innerHTML= '';
                        TheForms.reset()         
                        },2000)
                    }
            })
});




    //    <----- Validation2---->




document.addEventListener('DOMContentLoaded',()=>{
    const SideForm = document.querySelector('form');
    let SUserparent = document.querySelector('.side-Fields');
    let Suserchild = document.querySelector('#Identity-text');

    let Semailparent = document.querySelector('.side-Email');
    let Semailchild = document.querySelector('#Identity-email');

    let snumberParent = document.querySelector('.side-Number');
    let snumberchild  = document.querySelector('#Identity-number');


        function Sideusercheck(){
              const Suserpattern = /^[A-za-z]*\s{1}[A-Za-z]*$/;
              if(!Suserchild.value.match(Suserpattern)){
                  return  SUserparent.classList.add("invalid")
              } 
                SUserparent.classList.remove("invalid");
        }
   

        function Sideemail(){
                    const Semailpattern  = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                    if(!Semailchild.value.match(Semailpattern)){
                        return Semailparent.classList.add("invalid")
                    }
                      Semailparent.classList.remove("invalid")
        }


        function NumberSidecheck(){

            const sNumberPattern =  /^[0-9]{10}$/;
                        if(snumberchild.value.length == 0){
                            return snumberParent.classList.add("invalid");
                        }
                            snumberParent.classList.remove("invalid")

                            if(snumberchild.value.length !== 10){
                                return snumberParent.classList.add("invalid");
                            }
                            snumberParent.classList.remove("invalid")


                            if(!snumberchild.value.match(sNumberPattern)){
                                return snumberParent.classList.add("invalid");
                            }
                            snumberParent.classList.remove("invalid")
        }

    SideForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            Sideusercheck()
            Sideemail()
            NumberSidecheck()
            Suserchild.addEventListener('keyup',Sideusercheck);
            Semailchild.addEventListener('keyup',Sideemail);
            snumberchild.addEventListener('keyup',NumberSidecheck);


            if(!SUserparent.classList.contains("invalid")&&
                !Semailparent.classList.contains("invalid")&&
                !snumberParent.classList.contains("invalid")
                ){
                        SideForm.innerHTML = `<h1>Thank You for booking</h1>`
                        SideForm.style.color = '#0ea5e9'
                        SideForm.style.display = 'flex'
                        SideForm.style.flexDirection = 'column'
                        SideForm.style.fontSize = '1.8rem'
                        SideForm.style.alignItems = 'center'
                        SideForm.style.justifyContent = 'center'
                        let newDiv = document.createElement('p');
                        newDiv.textContent = 'Your reservation is confirmed'
                        SideForm.appendChild(newDiv)


                        setTimeout(()=>{
                                location.reload();
                                SideForm.reset();
                        },2000)

                }
    })
})






