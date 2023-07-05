const headbtn= document.querySelector('.header_bars');
const mobilenav= document.querySelector('.mobile-navbar');
const mobilenavlinks= document.querySelectorAll('.mobile-navbar-links');

let mobilenavopen=false;

headbtn.addEventListener('click', ()=>{
    mobilenavopen= !mobilenavopen;
    if(mobilenavopen){
        mobilenav.style.display='flex';
    headbtn.style.position='relative';
    document.body.style.overflowY='hidden';
    }
    
    else{
       mobilenav.style.display='none';
    headbtn.style.position='static';
    document.body.style.overflowY='auto';
    }
})

mobilenavlinks.forEach(link =>{       // link here will specify all the links to in mobile-navbar-links
    link.addEventListener('click',()=>{
        mobilenavopen=false; //close the mobile nav 
        mobilenav.style.display='none';
        document.body.style.overflowY='auto';
        
})
})


