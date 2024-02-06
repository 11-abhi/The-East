



function dialogbox(){
    let Read = document.querySelector('.read');
let dialog = document.querySelector('#modals');
let closeBtn = document.querySelector('.close-btns');


Read.addEventListener('click',function(){
            dialog.showModal()
})
closeBtn.addEventListener('click',function(){
            dialog.close()
})
}

dialogbox()






function SelectOpt(){
    const optMenu = document.querySelector('.select-Menu')
    let selectbtn = document.querySelector('.select-btn')
     let options = document.querySelectorAll('.The-flex-it')
   let  Textings = document.querySelector('.btn-text')
      
  
  
   selectbtn.addEventListener('click' ,()=>{
           return optMenu.classList.toggle("active")
   })
  
     options.forEach((val)=>{
              val.addEventListener('click',()=>{
                 let TextCont = val.childNodes[3].textContent
                 Textings.innerHTML = TextCont
                 optMenu.classList.remove("active")
              })
     })
}

SelectOpt()



function olaplex(){
    const olaParent = document.querySelector(".Olaplex");
    let olaChilddiv = document.querySelector('.olaplex-wrapper');
    let olaText = document.querySelector('.ola-text');
    let OlaFlex = document.querySelectorAll('.ola-flex');


    olaChilddiv.addEventListener('click',function(){
           return     olaParent.classList.toggle("active")
    })
    OlaFlex.forEach(function(val){
                val.addEventListener('click',function(){
                       let Valspan = val.childNodes[3].textContent;
                       olaText.innerHTML = Valspan
                       olaParent.classList.remove("active")
                })
    })

}


olaplex()


function stylist(){
        const stylistParent = document.querySelector('.stylist');
        let stylistChild = document.querySelector('.Stylist-wrapper');
        let stylistText = document.querySelector('.stylist-text');
        let  stylistOptions = document.querySelectorAll('.stylist-flex')


            stylistChild.addEventListener('click',function(){
                      return stylistParent.classList.toggle("active")
            })

            stylistOptions.forEach(function(value){
                   value.addEventListener('click',function(){
                            let stySpan = value.childNodes[3].textContent
                            stylistText.innerHTML = stySpan
                            stylistParent.classList.remove("active")
                   })
            })
        
}


stylist()






                                    // <-------Cart------->
                              


                                    function Bookings(){
                                        let cart = [];
                                        let total = 0;
                                    let cartInput = document.querySelectorAll('.inputs-flex');
                                    cartInput.forEach((value)=>{
                                               
                                                    
                                                value.addEventListener('click',()=>{
                                                    const products = value.dataset.productName;
                                                    console.log(products);
    
                                                   
                                                    
    
                                                    let matchingItem; 
                                                    cart.forEach((item)=>{
                                                            if(products === item.productName){
                                                                    matchingItem = item;
                                                            }
                                                    })
                                                        
                                                    if(matchingItem){
                                                          matchingItem.quantity += 1;
                                            
                                                    } else{
                                                        cart.push({
                                                            productName:products,
                                                            quantity:1,
                                                            total : 0
                                                      })
                                                    }
    
                                                    let cartQuantity = 0;
                                                    cart.forEach((item)=>{
                                                        cartQuantity += item.quantity
                                                    })
    
                                                    let span = document.querySelector('.service-span');
                                                     span.innerHTML = cartQuantity
                                                            
                                                })
                                    })
    
    
    
                                    let Total =  0;
                                    cartInput.forEach((theinputs ,index)=>{
                                            theinputs.addEventListener('click',()=>{
                                                   let value = parseInt(document.querySelectorAll('.The-flex-it p > span')[index].textContent);
                                                   Total += value
                                                   MoneyQuantity.textContent = `Total :` + Total
    
                                                   let lists = document.querySelector('.lists');
    
                                                   lists.classList.add("active")
    
                                                   
                                            })
    
                                        
                                    })
                                    
                                
    
    
                                    let inputs = document.querySelector('#The-Checkbox');
                                    let oneList = document.querySelector('.one-List');
                                    let oneprice = document.querySelector('.one-price')
    
                                    let twolist = document.querySelector('.two-list') 
                                    let input2 = document.querySelector('#The-CheckBox2')
                                    let twoprice = document.querySelector('.two-price')
                                
                                 
    
                                    let input3 = document.querySelector('#The-Checkbox3')
                                    let threeprice = document.querySelector('.three-price')
                                    let threelist = document.querySelector('.three-list')
    
                                    let input4 = document.querySelector('#Stylist-checkbox')
                                    let fourprice = document.querySelector('.four-price')
                                    let fourlist = document.querySelector('.four-list')
    
                                    let input5 = document.querySelector('#Blowdry')
                                    let fiveprice = document.querySelector('.Five-price')
                                    let Fivelist = document.querySelector('.five-list')
    
                                    let input6 = document.querySelector('#Mens')
                                    let sixprice = document.querySelector('.Six-price')
                                    let Sixlist = document.querySelector('.six-list')
                                    let MoneyQuantity = document.querySelector('.MoneyQuantity');
    
    
    
    
                                    inputs.addEventListener('click',()=>{
                                             oneList.innerHTML = 'Balayage'
                                             oneprice.innerHTML = '8000'
                                    })
    
                                    input2.addEventListener('click',()=>{
                                             twolist.innerHTML = 'Highlights'
                                            twoprice.innerHTML = '4000'
                                    })
    
    
    
                                    input3.addEventListener('click',()=>{
                                            threelist.innerHTML = 'Olaplex'
                                            threeprice.innerHTML = '8000'
                                    })
    
                                    input4.addEventListener('click',()=>{
                                            fourlist.innerHTML = 'Blow-Dry'
                                            fourprice.innerHTML = '400'
                                    })
    
                                    input5.addEventListener('click',()=>{
                                            Fivelist.innerHTML = 'CutBlowdry'
                                            fiveprice.innerHTML = '800'
                                    })
    
                                    input6.addEventListener('click',()=>{
                                            Sixlist.innerHTML = 'Mens'
                                            sixprice.innerHTML = '500'
                                    })
                                  
    
                                    }

                                    Bookings()


                                    
                                
                                
                                
                               


                            
                               

                               
              

                                        // dialogbox validation----->

            

