const submit = document.querySelector(".submit");
const main = document.querySelector(".main-container");
const thank = document.querySelector(".thank-section");
const ratingBtn = document.querySelectorAll(".button");
const score = document.querySelector('.score');
let stars = 3;



submit.addEventListener('click', onSubmit);

ratingBtn.forEach(btn => {
    btn.addEventListener('click', ratingBtnClick);
})

function onSubmit(){
    main.classList.add('hidden');
    score.textContent = stars;
    thank.classList.remove('hidden');
}

function ratingBtnClick(event){
   ratingBtn.forEach(function(btn){
       btn.classList.remove('active');
   })
   event.target.classList.add('active');

   stars = event.target.textContent;
}




