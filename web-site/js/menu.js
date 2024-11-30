
let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scroolltop = window.scrollY

    if(scroolltop > 0){
        navBar.classList.add('rolar')
    }else {
        navBar.classList.remove('rolar')
    }
    
})