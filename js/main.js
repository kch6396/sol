
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
