
// const fadeEls = document.querySelectorAll('.visual .fade-in');
// fadeEls.forEach(function (fadeEl, index){
//   gsap.to(fadeEl, 1, {
//     delay: (index+1) * .7,
//     opacity: 1
//   });
// });

const toggleBtn=document.querySelector('.nav__button');
const menu= document.querySelector('.nav');
const menu1= document.querySelector('.main__nav');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menu1.classList.toggle('active');
});

const sol=document.querySelector('.solution');
const twosol= document.querySelector('.solutions-nav');
const twosol2=document.querySelector('#underline');
const twosol3=document.querySelector('.nav');
sol.addEventListener('click', () =>{
  twosol.classList.toggle('active');
  twosol2.classList.toggle('active');
  twosol3.classList.toggle('active2');
});

// var content = document.getElementsByClassName('second__image')[0];
var content = document.getElementsByClassName('second__write')[0];
var parent = content.parentNode;
parent.insertBefore(content, parent.childNodes[2]);