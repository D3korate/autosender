const body = document.getElementsByTagName("body");

const selectSingle = document.querySelectorAll('.__select');

for (let i = 0; i < selectSingle.length; i++) {
  const selectSingle_title = selectSingle[i].querySelector('.__select__title');
  const selectSingle_labels = selectSingle[i].querySelectorAll('.__select__label');
  const selectSingle_txt = selectSingle[i].querySelector('.__select__txt');

  if (selectSingle_txt) {
    selectSingle_txt.addEventListener("keyup", () => {

      let filter = selectSingle_txt.value.toLowerCase();
      console.log(filter);


      selectSingle_labels.forEach(el => {
        console.log(el.innerHTML.toLowerCase());
        if (el.innerHTML.toLowerCase().indexOf(filter) > -1) {
          el.style.display = "";
        }
        else {
          el.style.display = "none";
        }



      })
    })
  }


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

  const toggelMobile = tabs[y].querySelector(".toggel-mobile");

  const tabsListUl = tabs[y].querySelector(".tabs-list");

  if (toggelMobile) {
    toggelMobile.addEventListener("click", function () {
      tabsListUl.classList.toggle("active");
      this.classList.toggle("active");
    });
  }
  tabList.forEach(function (item) {
    item.addEventListener("click", function () {
      if (tabsListUl.classList.contains("active")) tabsListUl.classList.remove("active");
      toggelMobile.innerHTML = item.textContent;
      toggelMobile.classList.remove("active");
    });

  })


}





function slider() {

  const slide_elements = document.querySelectorAll(".sliders");


  if (!slide_elements) return false;

  slide_elements.forEach(slides => {

    const slide = slides.querySelectorAll(".slide");
   

    let slideDotts = document.createElement("span");

    slideDotts.classList.add("slider__dott");
    slides.after(slideDotts);

    let slidersLeft = document.createElement("span");
    let slidersRight = document.createElement("span");

    let leftPosition = 0;

    let slideNumbOnPage = slides.clientWidth / slide[0].clientWidth;
    console.log(slide[0].clientWidth);
    slideNumbOnPage = Math.round(slideNumbOnPage);

    let NumbPage = slide.length / slideNumbOnPage;


    for (let x = 0; x < NumbPage; x++) {
      let xx = document.createElement('span');

      if (NumbPage > 1) {
        if (x == 0) xx.classList.add("active");
        slideDotts.appendChild(xx);
    
      }




      xx.addEventListener("click", function () {

        //  console.log("ширина слайдера: " + slides.clientWidth + ";" + "ширина элемента" + i.clientWidth)

        let dott = slides.parentNode.querySelectorAll(".slider__dott span");
 
        for (let i = 0; i < dott.length; i++) {
          if (dott[i].classList.contains("active")) dott[i].classList.remove("active")
        }

        leftPosition = slides.clientWidth * x;

        slides.style.left = -leftPosition + "px";
        xx.classList.add("active");



      })
    }

    slidersLeft.addEventListener("click", function () {

      if (leftPosition <= 0) {
        leftPosition = 0;
      }
      else {
        leftPosition -= slide[0].clientWidth;
      }

      slides.style.left = -leftPosition + "px";


      let dott = slides.parentNode.querySelectorAll(".slider__dott span");
      console.log(dott);
      let dottActive = leftPosition / slides.clientWidth;
      dottActive = Math.ceil(dottActive);
      for (let i = 0; i < dott.length; i++) {
        if (dott[i].classList.contains("active")) dott[i].classList.remove("active");
      }
      dott[dottActive].classList.add("active")

    })

    slidersRight.addEventListener("click", function () {


      if (leftPosition < slide[0].clientWidth * (slide.length - slideNumbOnPage)) {
        leftPosition += slide[0].clientWidth;
      }
      else {
        leftPosition = 0;
      }


      slides.style.left = -leftPosition + "px";

      let dott = slides.parentNode.querySelectorAll(".slider__dott span");

      let dottActive = leftPosition / slides.clientWidth;
      dottActive = Math.ceil(dottActive);

      for (let i = 0; i < dott.length; i++) {
        if (dott[i].classList.contains("active")) dott[i].classList.remove("active");
      }
      dott[dottActive].classList.add("active")



    })

    touch(slides, slidersRight, slidersLeft);


  })


}


function sliderStep() {

  let mainSlider = document.querySelectorAll(".main-slider");
  if (!mainSlider) return false;

  mainSlider.forEach(function (i) {

    let sliderStep = i.querySelector(".sliderStep");
    let sliderStepItem = i.querySelectorAll(".sliderStep__item");
    let sliderLeft = i.querySelector(".slider-left");
    let sliderRight = i.querySelector(".slider-right");
    let offeset = 0;
    let sliderStepNumbOnPage = sliderStep.clientWidth / sliderStepItem[0].clientWidth;
    sliderStepNumbOnPage = Math.round(sliderStepNumbOnPage);
    let slideWidth = sliderStepItem[0].clientWidth;

    sliderRight.addEventListener("click", funSliderRight)

    sliderLeft.addEventListener("click", funSliderLeft)


    function funSliderRight() {
      offeset += slideWidth;
      if (offeset > slideWidth * (sliderStepItem.length - sliderStepNumbOnPage)) offeset = 0;
      sliderStep.style.left = - offeset + "px";
    }

    function funSliderLeft() {
      offeset -= slideWidth;
      if (offeset < 0) offeset = 0;
      sliderStep.style.left = - offeset + "px";
    }

    touch(sliderStep, sliderRight, sliderLeft);

  });

}









let spolerItem = document.querySelectorAll(".information-page__spoler");


spolerItem.forEach(function (el) {

  el.addEventListener("click", function () {

    el.classList.toggle("active");
  })
})


const imgContainerFluid = document.querySelectorAll(".information-page__img-fluid");



imgContainerFluid.forEach(function (el) {
  let elHeight = el.clientHeight;
  el.parentElement.style.height = elHeight + "px";

})



let mainAuctiontabsItemList = document.querySelectorAll(".main__auctiontabs-item__list");

mainAuctiontabsItemList.forEach(function (el) {
  let li = el.getElementsByTagName("li");
  let all = el.parentElement.querySelector(".main__auctiontabs-item__all");
  all.style.display = "none"

  if (innerWidth < 1024 && li.length > 10) {
    all.style.display = "block";
  }


  for (let x = 0; x < li.length; x++) {
    if (x > 10 && innerWidth < 1024) {
      li[x].style.display = "none";
    }

    all.addEventListener("click", function () {

      for (let x = 0; x < li.length; x++) {
        li[x].style.display = "block";
      }
      this.style.display = "none"

    })

  }

})


let fotorama = document.querySelector(".fotorama");

if (fotorama) {
  $('.fotorama').fotorama({
    maxwidth: '100%',
    thumbwidth: 250,
    thumbheight: 120,
    allowfullscreen: true,
    nav: 'thumbs'
  });


  if (innerWidth < 1024) {

    $('.fotorama').fotorama({
      thumbwidth: 150,
      thumbheight: 80,
    });

  }

  if (innerWidth < 576) {

    $('.fotorama').fotorama({
      thumbwidth: 100,
      thumbheight: 60,
    });

  }
}



const modal = document.querySelector(".modal");
const modalCall = document.querySelectorAll(".modal-call");


modalCall.forEach((el) => {
  el.addEventListener("click", function () {

    modal.classList.add("active");

    body[0].classList.add("over-hidden");

    let modalClose = modal.querySelector(".modal__close");
    modalClose.addEventListener("click", function () {
      modal.classList.remove("active");
      body[0].classList.remove("over-hidden");
    });
    modal.addEventListener("click", function (event) {
      if (event.target == this) {
        this.classList.remove("active");
        body[0].classList.remove("over-hidden");
      }
    })
  });
})




const menuBurgerPopOver = document.querySelector(".menu-burger-pop-over");
const headerMobileMenuBurg = document.querySelector(".header__mobile__menu-burg");

headerMobileMenuBurg.addEventListener("click", function () {
  menuBurgerPopOver.classList.add("active");
  body[0].classList.add("over-hidden");
  this.classList.add("active");
  let modalClose = menuBurgerPopOver.querySelector(".menu-burger__close");

  modalClose.addEventListener("click", function () {
    menuBurgerPopOver.classList.remove("active");
    body[0].classList.remove("over-hidden");
  });

})






function touch(a, c, b) {

  //Чувствительность — количество пикселей, после которого жест будет считаться свайпом
  const sensitivity = 20;


  var touchStart = null; //Точка начала касания
  var touchPosition = null; //Текущая позиция

  //Перехватываем события
  a.addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
  a.addEventListener("touchmove", function (e) { TouchMove(e); }); //Движение пальцем по экрану
  //Пользователь отпустил экран
  a.addEventListener("touchend", function (e) { TouchEnd(e, "green"); });
  //Отмена касания
  a.addEventListener("touchcancel", function (e) { TouchEnd(e, "red"); });

  function TouchStart(e) {
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };

  }

  function TouchMove(e) {
    //Получаем новую позицию
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };

  }

  function TouchEnd(e, color) {


    CheckAction(); //Определяем, какой жест совершил пользователь

    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
  }

  function CheckAction() {
    var d = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
      x: touchStart.x - touchPosition.x,
      y: touchStart.y - touchPosition.y
    };


    if (Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
    {
      if (Math.abs(d.x) > sensitivity) //Проверяем, было ли движение достаточно длинным
      {
        if (d.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
        {

          c.click();
        }
        else //Иначе он двигал им слева направо
        {
          b.click();

        }
      }
    }
    else //Аналогичные проверки для вертикальной оси
    {
      if (Math.abs(d.y) > sensitivity) {
        if (d.y > 0) //Свайп вверх
        {

        }
        else //Свайп вниз
        {

        }
      }
    }

  }
}



slider();
sliderStep();




