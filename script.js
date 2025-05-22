"use strict"

document.addEventListener('DOMContentLoaded', function () {

  // header
  
  const header = document.querySelector('.header__wrapper');
  const trigger = document.querySelector('.trigger');

  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries)
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add('headerOpen');
        } else {
          header.classList.remove('headerOpen');
        }
      });
    },
    {
      root: null,
      threshold: 0,
    }
  );

  if (trigger) {
    observer.observe(trigger);
  }
});




  // trainer
  const trainerTab = document.querySelector('.trainer__title--trainer');
  const staffTab = document.querySelector('.trainer__title--staff');
  const trainerList = document.querySelector('.trainer__list--trainer');
  const staffList = document.querySelector('.trainer__list--staff');
  
  trainerTab.addEventListener('click', ()=>{
    trainerList.style.display = 'grid';
    staffList.style.display = 'none';
  
    trainerTab.style.borderBottom = '1px solid #fff';
  staffTab.style.borderBottom = 'none';
  });
  
  staffTab.addEventListener('click', () => {
    trainerList.style.display = 'none';
    staffList.style.display = 'grid';
  
    staffTab.style.borderBottom = '1px solid #fff';
    trainerTab.style.borderBottom = 'none';
  });



// FAQ
  document.querySelectorAll('.faq__qText').forEach((el) =>{

    el.addEventListener('click', ()=>{
      el.classList.toggle('arrow')
const answer = el.nextElementSibling;
if(answer){
  answer.classList.toggle('accordionOpen');
}
    })
  })




  new Splide( '.splide',{
  type: 'loop',
  perPage: 1,
  arrows: true,

} ).mount();




