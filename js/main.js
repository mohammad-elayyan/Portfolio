const burger = document.querySelector('.header .nav-list .burger');
const menu = document.querySelector('.header .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-list ul li a');
const header = document.querySelector('.header.container');

burger.addEventListener('click' , () =>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

document.addEventListener('scroll' ,()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor ='#29323c';
    }
    else{
        header.style.backgroundColor ='rgba(31, 30, 30, 0.24)';

    }
});

menu_item.forEach((item) =>{
    item.addEventListener('click' , () =>{
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});