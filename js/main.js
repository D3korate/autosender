const selectSingle = document.querySelectorAll('.__select');


for (let i = 0; i < selectSingle.length; i++) {
  const selectSingle_title = selectSingle[i].querySelector('.__select__title');
  const selectSingle_labels = selectSingle[i].querySelectorAll('.__select__label');

  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle[i].getAttribute('data-state')) {
      selectSingle[i].setAttribute('data-state', '');
    } else {
      selectSingle[i].setAttribute('data-state', 'active');
    }
  });

  for (let x = 0; x < selectSingle_labels.length; x++) {
    selectSingle_labels[x].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle[i].setAttribute('data-state', '');
    });
  }

}


const scrollDrop = document.querySelectorAll('.scroll-drop');

scrollDrop.forEach(function (el, i) {

  el.addEventListener('mousemove', (e) => {
    const t = e.currentTarget;
    const xx = Math.min(1, e.clientX / t.clientWidth);
    el.scrollLeft = (t.scrollWidth - t.clientWidth) * xx;

  });


});



const autoEl = document.querySelectorAll(".screen-3__el");

autoEl.forEach(function (el, i) {

  const autoTitle = el.querySelector(".auto-title");
  const backgroundTxt = autoTitle.cloneNode(true);
  backgroundTxt.classList.remove("auto-title");
  backgroundTxt.classList.add("background-txt");
  el.appendChild(backgroundTxt);

})



const tabs = document.querySelectorAll(".tabs");

for (let y = 0; y < tabs.length; y++) {
  const tabList = tabs[y].querySelectorAll(".tabs-list > li");
  const tabItem = tabs[y].querySelectorAll(".tabs-item");

  tabList.forEach(function (el, i) {

    el.addEventListener("click", function () {

      for (let x = 0; x < tabList.length; x++) {
        if (tabList[x].classList.contains("active")) tabList[x].classList.remove("active")
      }

      for (let x = 0; x < tabItem.length; x++) {

        if (tabItem[x].classList.contains("active")) {
          tabItem[x].classList.remove("active");
        }
      }

      el.classList.add("active");
      tabItem[i].classList.add("active");
    })

  })

  tabList[0].click()

}





function slider() {
  const slides = document.querySelector(".sliders");
  if (!slides) return false;

  const slide = document.querySelectorAll(".slide");
  let slideDotts = document.querySelector(".slider__dott");

  let leftPosition = 0;


  let slideNumbOnPage = slides.clientWidth / slide[0].clientWidth;
  slideNumbOnPage = Math.round(slideNumbOnPage);

  let NumbPage = slide.length / slideNumbOnPage;


  for (let x = 0; x < NumbPage; x++) {


    let xx = document.createElement('span');
    if (x == 0) {
      xx.classList.add("active");
    }
    slideDotts.appendChild(xx);



    xx.addEventListener("click", function () {

      //  console.log("ширина слайдера: " + slides.clientWidth + ";" + "ширина элемента" + i.clientWidth)

      let dott = slideDotts.querySelectorAll("span");
      for (let i = 0; i < dott.length; i++) {
        if (dott[i].classList.contains("active")) dott[i].classList.remove("active")
      }

      leftPosition = slides.clientWidth * x;

      // left = (i.clientWidth * (x + 1)) - slides.clientWidth;
      // console.log(left);

      // if (leftPosition < 0) leftPosition = 0;
      // if (leftPosition > slides.clientWidth) leftPosition = 0;

      slides.style.left = -leftPosition + "px";
      xx.classList.add("active");



    })


  }
}


function sliderStep() {
let mainSlider = document.querySelectorAll(".main-slider");
if (!mainSlider) return false;

mainSlider.forEach(function(i) {

let sliderStep = i.querySelector(".sliderStep");
let sliderStepItem = i.querySelectorAll(".sliderStep__item");
let sliderLeft = i.querySelector(".slider-left");
let sliderRight = i.querySelector(".slider-right");
let offeset = 0;
let sliderStepNumbOnPage = sliderStep.clientWidth / sliderStepItem[0].clientWidth;
sliderStepNumbOnPage = Math.round(sliderStepNumbOnPage);
let slideWidth = sliderStepItem[0].clientWidth;

sliderRight.addEventListener("click", function () {

  offeset += slideWidth;
  if (offeset > slideWidth * (sliderStepItem.length - sliderStepNumbOnPage)) offeset = 0;
  sliderStep.style.left = - offeset + "px";

})

sliderLeft.addEventListener("click", function () {

  offeset -= slideWidth;
  if (offeset < 0) offeset = 0;
  sliderStep.style.left = - offeset + "px";

})

});



}






let spolerItem = document.querySelectorAll(".information-page__spoler");


spolerItem.forEach(function(el) {

  el.addEventListener("click", function() {
    
    el.classList.toggle("active");
  })
})


const imgContainerFluid = document.querySelectorAll(".information-page__img-fluid");



imgContainerFluid.forEach(function(el) {
  let elHeight = el.clientHeight;
  el.parentElement.style.height = elHeight + "px";
  
})


slider();
sliderStep();




