let mobileMenu=document.getElementById('mobile-menu')
let menuBruh=document.getElementById('menu-x')
const menuX=()=>{
    if(menuBruh.classList.contains('fa-bars')){
        menuBruh.classList.remove('fa-bars')
        menuBruh.classList.add('fa-times')
    } else {
        menuBruh.classList.remove('fa-times')
        menuBruh.classList.add('fa-bars')

    }
}