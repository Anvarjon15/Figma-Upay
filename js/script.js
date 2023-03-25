'use strict'
const btn = document.querySelector(".button2")
const backButton=document.querySelector('.button1')
const buttons=document.querySelectorAll(".box5") 
const mobButton=document.querySelector(".box4") 
const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const b3 = document.querySelector("#b3")
const b4 = document.querySelector("#b4")
const b5 = document.querySelector("#b5")
const telNum=document.querySelector(".box6")
const internet=document.querySelectorAll('.internet')
const a1=document.querySelector(".a1") 
const a2=document.querySelector(".a2") 
const a3=document.querySelector(".a3") 
const search=document.querySelector('.search')
const beeline=document.querySelector('.beeline')
const numAccount=document.querySelector('.num-account')
const btnInternet=document.querySelector('.btn-internet')
const btnTv=document.querySelector('.btn-tv')
const btnUslugi=document.querySelector('.btn-uslugi')
const btnOther=document.querySelector('.btn-other')
const tv=document.querySelectorAll('.tv')
const uslugi=document.querySelectorAll('.uslugi')
const other=document.querySelectorAll('.other')
const onTv=document.querySelector('.on-tv')
const onTv2=document.querySelector(".on-tv2")
const online=document.querySelector('.online')
const water=document.querySelector('#hotwater')
const gas=document.querySelector('#gas')
const electr=document.querySelector('#electr')
const water1=document.querySelector('#hotwater1')
const gas1=document.querySelector('#gas1')
const electr1=document.querySelector('#electr1')
const olx=document.querySelector('#olx')
const soliq=document.querySelector('#soliq')
const greenF=document.querySelector('#greenf')
const olx1=document.querySelector('#olx1')
const soliq1=document.querySelector('#soliq1')
const greenF1=document.querySelector('#greenf1')
const selectCountry=document.querySelector('.box3') 
const flagUs=document.querySelector('.flag')
const flagUz=document.querySelector('.flaguz')
// const flagUs2=document.querySelector('.flag2')
// const flagUz2=document.querySelector('.flaguz2')
b1.style.background='yellow'
flagUs.style.display="none"



buttons.forEach((item) => {
    item.style.display ="none"
  });


// })
buttons.forEach((item) => {
  item.style.display ="block"
})
backButton.addEventListener('click',(event)=>{
  event.preventDefault();
mobButton.style.display = "none";
buttons.forEach((item) => {
  item.style.display ="block"
})
internet.forEach((item)=>{
  item.style.display='none'
})
telNum.style.display="block"
search.style.display = "none"
beeline.style.display="none"
numAccount.style.display="none"
btnInternet.style.display="none";
b2.style.background="white"
b1.style.background="yellow"
b3.style.background="white"
b4.style.background="white"
b5.style.background="white"
tv.forEach((item)=>{
  item.style.display="none"
uslugi.forEach((item)=>{
    item.style.display="none"
    })
  })
  other.forEach((item)=>{
    item.style.display="none"
    })
    online.style.display="none"
    water.style.display="none"
  electr.style.display="none"
  gas.style.display="none" 
  olx1.style.display="none"
  soliq1.style.display="none"
  greenF1.style.display="none"
  btnOther.style.display="none"
  btnTv.style.display="none"
  btnUslugi.style.display="none"
 
})

// =======
internet.forEach((item)=>{
  item.style.display='none'
})
search.style.display = "none";
btnInternet.style.display="none";
beeline.style.display="none"
numAccount.style.display="none"
tv.forEach((item)=>{
  item.style.display="none"
  })
uslugi.forEach((item)=>{
  item.style.display="none"
  })
 other.forEach((item)=>{
   item.style.display="none"
  })
  online.style.display="none"
  gas.style.display="none"
  electr.style.display="none"
  water.style.display="none"
  olx1.style.display="none"
  soliq1.style.display="none"
  greenF1.style.display="none"
  btnOther.style.display="none"
  btnTv.style.display="none"
  btnUslugi.style.display="none"



b2.addEventListener('click',(event)=>{
  event.preventDefault();
  telNum.style.display="none"
  internet.forEach((item)=>{
  item.style.display="block"
  })
  search.style.display = "block"
  beeline.style.display="none"
  numAccount.style.display="none"
  btnInternet.style.display="none";
  b2.style.background="yellow"
  b1.style.background="white"
  b3.style.background="white"
  b4.style.background="white"
  b5.style.background="white"
  tv.forEach((item)=>{
    item.style.display="none"
  uslugi.forEach((item)=>{
      item.style.display="none"
      })
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
      online.style.display="none"

})

b3.addEventListener('click',(event)=>{
  event.preventDefault();
  telNum.style.display="none"

  tv.forEach((item)=>{
  item.style.display="block"
  })
  internet.forEach((item)=>{
    item.style.display="none"
    })
  search.style.display = "block"
  beeline.style.display="none"
  numAccount.style.display="none"
  btnInternet.style.display="none";
  b2.style.background="white"
  b1.style.background="white"
  b3.style.background="yellow"
  b4.style.background="white"
  b5.style.background="white"
  uslugi.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
      online.style.display="none"
})

b4.addEventListener('click',(event)=>{
  event.preventDefault();
  telNum.style.display="none"
  uslugi.forEach((item)=>{
    item.style.display="block"
    })
  tv.forEach((item)=>{
  item.style.display="none"
  })
  internet.forEach((item)=>{
    item.style.display="none"
    })
  other.forEach((item)=>{
      item.style.display="none"
      })
  search.style.display = "block"
  beeline.style.display="none"
  numAccount.style.display="none"
  btnInternet.style.display="none";
  b2.style.background="white"
  b1.style.background="white"
  b3.style.background="white"
  b4.style.background="yellow"
  b5.style.background="white"
  online.style.display="none"
})

b5.addEventListener('click',(event)=>{
  event.preventDefault();
  telNum.style.display="none"
  other.forEach((item)=>{
    item.style.display="block"
    })
  tv.forEach((item)=>{
  item.style.display="none"
  })
  internet.forEach((item)=>{
    item.style.display="none"
    })
  search.style.display = "block"
  beeline.style.display="none"
  numAccount.style.display="none"
  btnInternet.style.display="none";
  b2.style.background="white"
  b1.style.background="white"
  b3.style.background="white"
  b4.style.background="white"
  b5.style.background="yellow"
  uslugi.forEach((item)=>{
    item.style.display="none"
    })
    online.style.display="none"
})



b1.addEventListener('click',(event)=>{
  event.preventDefault();
  telNum.style.display="block"
  internet.forEach((item)=>{
    item.style.display='none'
  })
  search.style.display = "none" 
  beeline.style.display="none"
  numAccount.style.display="none"
  btnInternet.style.display="none";
  b1.style.background="yellow"
  b2.style.background="white"
  b3.style.background="white"
  b4.style.background="white"
  b5.style.background="white"
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
      online.style.display="none"
})





a1.addEventListener('click',(event)=>{
  event.preventDefault();
  beeline.style.display="block"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnInternet.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
a2.addEventListener('click',(event)=>{
  event.preventDefault();
  beeline.style.display="block"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnInternet.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
a3.addEventListener('click',(event)=>{
  event.preventDefault();
  beeline.style.display="block"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnInternet.style.display="block"
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
  
})
onTv.addEventListener('click',(event)=>{
  event.preventDefault();
  online.style.display="block"
  beeline.style.display="none"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnTv.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
onTv2.addEventListener('click',(event)=>{
  event.preventDefault();
  online.style.display="block"
  beeline.style.display="none"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnTv.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
gas1.addEventListener('click',(event)=>{
  event.preventDefault();
  gas.style.display="block"
  uslugi.forEach((item)=>{
    item.style.display="none"
    })
  beeline.style.display="none"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnUslugi.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
electr1.addEventListener('click',(event)=>{
  event.preventDefault();
  electr.style.display="block"
  gas.style.display="none"
  uslugi.forEach((item)=>{
    item.style.display="none"
    })
  beeline.style.display="none"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnUslugi.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
water1.addEventListener('click',(event)=>{
  event.preventDefault();
  water.style.display="block"
  electr.style.display="none"
  gas.style.display="none"
  uslugi.forEach((item)=>{
    item.style.display="none"
    })
  beeline.style.display="none"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnUslugi.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
olx.addEventListener('click',(event)=>{
  event.preventDefault();
  olx1.style.display="block"
  soliq1.style.display="none"
  greenF1.style.display="none"
  other.forEach((item)=>{
    item.style.display="none"
    })
    btnOther.style.display="block";
  beeline.style.display="none"
  numAccount.style.display="block"

  internet.forEach((item)=>{
    item.style.display='none'
  })
  btnTv.style.display="block";
  buttons.forEach((item) => {
    item.style.display ="none"
  })
  tv.forEach((item)=>{
    item.style.display="none"
    })
    other.forEach((item)=>{
      item.style.display="none"
      })
})
soliq.addEventListener('click',(event)=>{
  event.preventDefault();
  olx1.style.display="none"
  soliq1.style.display="block"
  greenF1.style.display="none"
  other.forEach((item)=>{
    item.style.display="none"
    })
    btnInternet.style.display="none"
    btnOther.style.display="block";
    numAccount.style.display="block"
    buttons.forEach((item) => {
      item.style.display ="none"
    })
 })
 greenF.addEventListener('click',(event)=>{
  event.preventDefault();
  olx1.style.display="none"
  soliq1.style.display="none"
  greenF1.style.display="block"
  other.forEach((item)=>{
    item.style.display="none"
    })
    btnInternet.style.display="none"
    btnOther.style.display="block";
    numAccount.style.display="block"
    buttons.forEach((item) => {
      item.style.display ="none"
    })
 })
//  console.log(flagUz);
mobButton.style.display='none'

 selectCountry.addEventListener('change' , (e) =>{
  console.log(e.target.value);
  if (e.target.value === "us"){
    flagUz.src = "logos/amer.svg";
    buttons.forEach((item) => {
      item.style.display = "none";
    })  
    b2.style.background="white"
    b1.style.background="yellow"
    b3.style.background="white"
    b4.style.background="white"
    b5.style.background="white"
    olx1.style.display="none"
      soliq1.style.display="none"
      greenF1.style.display="none"
      btnOther.style.display="none"
      btnTv.style.display="none"
      btnUslugi.style.display="none"
      numAccount.style.display="none" 
    
      
    mobButton.style.display='block'
    tv.forEach((item)=>{
      item.style.display="none"
      })
      uslugi.forEach((item)=>{
        item.style.display="none"
        })
        other.forEach((item)=>{
          item.style.display="none"
          })
      telNum.style.display="block" 
      water.style.display="none"
      electr.style.display="none"
      gas.style.display="none"
      buttons
    
  }else {
    flagUz.src = "logos/flag-of-uzbek.jpg";
      buttons.forEach((item) => {
      item.style.display = "block";       
  })
  b2.style.background="white"
  b1.style.background="yellow"
  b3.style.background="white"
  b4.style.background="white"
  b5.style.background="white"
  olx1.style.display="none"
    soliq1.style.display="none"
    greenF1.style.display="none"
    btnOther.style.display="none"
    btnTv.style.display="none"
    btnUslugi.style.display="none"
    numAccount.style.display="none" 
  
  
  mobButton.style.display='none'
  tv.forEach((item)=>{
    item.style.display="none"
    })
    uslugi.forEach((item)=>{
      item.style.display="none"
      })
      other.forEach((item)=>{
        item.style.display="none"
        })
    telNum.style.display="block" 
    water.style.display="none"
    electr.style.display="none"
    gas.style.display="none" 
  }
 })
