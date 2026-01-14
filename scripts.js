 let menu = document.querySelector('#menu-icon'); 
 let navbar = document.querySelector('.navbar'); 
 menu.onclick = () => { 
  menu.classList.toggle('bx-x') 
  navbar.classList.toggle('active') 
 } 
 window.onscroll = () => { 
  menu.classList.remove('bx-x') 
  navbar.classList.remove('active') 
 }
 
 let dropdownToggle = document.getElementById('dropdown-toggle');
 let dropdowns = document.querySelectorAll('.dropdown');
 
 dropdownToggle.addEventListener('click', () => {
   dropdowns.forEach((dropdown) => {
     dropdown.classList.toggle('show');
   });
 });


//  boton para subir
 
 const upwardButton = document.querySelector('.goupbutton');

window.addEventListener('scroll', () => {
  if (window.scrollY <= 0) {
    upwardButton.classList.add('hidden');
  } else {
    upwardButton.classList.remove('hidden');
  }
});