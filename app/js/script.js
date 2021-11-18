let menuBruh=document.getElementById('menu-x')
let mobileMenu=document.getElementById('mobile-menu')
const menuX=()=>{
    if(menuBruh.classList.contains('fa-bars')){
        menuBruh.classList.remove('fa-bars')
        menuBruh.classList.add('fa-times')
        mobileMenu.classList.add('show')
    } else {
        menuBruh.classList.remove('fa-times')
        menuBruh.classList.add('fa-bars')
        mobileMenu.classList.remove('show')

    }
}