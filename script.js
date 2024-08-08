const btn = document.querySelector('.btn')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelector('.nav-links')
const navLinkArr = document.querySelectorAll('.nav-link')
const icon = document.querySelector('i')

btn.addEventListener('click', () => {
    navbar.classList.toggle('colapse')
    btn.classList.toggle('rotate')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
    navLinks.classList.toggle('slide-out')
    
})
