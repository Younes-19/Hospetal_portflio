  let mnue = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.navbar'); 


//يختفي مربع البحث مع السكرول
  window.onscroll= ()=>{
    mnue.classList.remove('fa-times');
    navbar.classList.remove('active');
}



 

//علامهه  تظهر مربع البحث وتتحول الى اكس
  mnue.onclick = ()=>{
      mnue.classList.toggle('fa-times');
      navbar.classList.toggle('active');    
  }




  // زياده الارقام عند الوصول الى قسم معين
let nums =document.querySelectorAll(".num");
 let section = document.querySelector(".icon-container");
let start = false // funccation Start? NO

function startCount(el){
  let goal = el.dataset.goal;
  let count = setInterval(()=>{
    el.textContent++;

    if(el.textContent == goal){
      clearInterval(count);
    }
  }, 300 / goal);
}

window.onscroll = function () {
  if(window.scrollY >= section.offsetTop){
    if(!start){
      nums.forEach((num) => startCount(num));
    }
    start = true;
  }
}



