let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let selection = document.querySelector('section');
let navLinks = document.querySelector('header nav');


// window.onscroll = ()=>{
//     selection.foreach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHight;
//         let id= sec.getAttribute('id');


//         if(top>=offset && top<=offset +height){
//             navLinks.foreach(Links=>{
//                 Links.classList.remove('active');
//                 document.querySelector('header nav a [herf*=' + id +']').classList.add('active');
//             })
//         }
//     })
// }
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}



