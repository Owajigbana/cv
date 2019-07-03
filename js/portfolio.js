// create responsive nav bar with jQuery
// $(document).ready(function(){
//   $('.mobile').click(function(){
//     $('.png .nav').toggleClass('show');
//   });
// });

/* jshint esversion:6 */

// define the toggler
const tab = document.querySelector('.mobile');

tab.addEventListener('click', e => {
  //target the ul
  const text = document.querySelector('ul');
  //attach the new .show class and store in a variable
  const show = text.classList.toggle('show');
  e.target.show.style.display = 'block';
});

const bar = document.querySelector('.progressbar');
const bar1 = document.querySelector('.progressbar1');
const bar2 = document.querySelector('.progressbar2');
const bar3 = document.querySelector('.progressbar3');
const bar4 = document.querySelector('.progressbar4');

bar.addEventListener('click',function progressbar (){
  let i = 0;
  const move = setInterval(motion, 10);
  function motion() {
    if(i === 450){
      clearInterval(bar);
    } else{
      i++;
      bar.style.width = i+ 'px';
    }
  }
});

bar1.addEventListener('click',function progressbar (){
  let i = 0;
  const move = setInterval(motion, 10);
  function motion() {
    if(i === 400){
      clearInterval(bar1);
    } else{
      i++;
      bar1.style.width = i+ 'px';
    }
  }
});

bar2.addEventListener('click',function progressbar (){
  let i = 0;
  const move = setInterval(motion, 10);
  function motion() {
    if(i === 300){
      clearInterval(bar2);
    } else{
      i++;
      bar2.style.width = i+ 'px';
    }
  }
});

bar3.addEventListener('click',function progressbar (){
  let i = 0;
  const move = setInterval(motion, 10);
  function motion() {
    if(i === 350){
      clearInterval(bar3);
    } else{
      i++;
      bar3.style.width = i+ 'px';
    }
  }
});

bar4.addEventListener('click',function progressbar (){
  let i = 0;
  const move = setInterval(motion, 10);
  function motion() {
    if(i === 250){
      clearInterval(bar4);
    } else{
      i++;
      bar4.style.width = i+ 'px';
    }
  }
});
