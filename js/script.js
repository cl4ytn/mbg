function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.header');
    if(window.scrollY>0){
        nav.classList.add("add-shadow");
    }else{
        nav.classList.remove("add-shadow");
    }
    });