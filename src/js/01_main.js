'use strict'

$(document).ready(function(){
     $('.partner__slider').slick({
      arrow: true,
      appendArrows:'.wrap__button',
      prevArrow: '<button class="prev btn-no-hover"></button>',
      nextArrow: '<button class="next btn-no-hover"></button>',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
     ///////AboutSlider
     $('.about__slider').slick({
         autoplay: true,
         autoplaySpeed: 4000,
         appendArrows:'.about__btn',
         prevArrow: '<button class="about__prev about__btn-bg"></button>',
         nextArrow: '<button class="about__next about__btn-bg"></button>',
     })
});

// получаем координаты элемента в контексте документа
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
  top:box.y + pageYOffset,
  Y:pageYOffset
  }
  
}
$(document).ready(function(){

let number = document.querySelector('.map'),
    numberTop = number.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll); //удаляем прослушку событий т.к дальнейшем не нужна
            $('.map__number_count').css('opacity', '0.3');
            $('.map__number_count').spincrement({
              thousandSeparator: "",
              duration: 2500
         });
            
    }
});
});

function changeSVG (numOfPoint) {
    let elemID = '.point' + numOfPoint;
    let element = document.querySelector(elemID);
    element.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.638 24.2868C17.8381 23.9402 18.1399 23.6656 18.491 23.4735C22.3696 21.3514 25 17.2329 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 17.2335 2.63106 21.3525 6.51052 23.4743C6.86173 23.6664 7.16366 23.9411 7.36382 24.2878L10.7686 30.1849C11.5384 31.5183 13.4629 31.5183 14.2327 30.1849L17.638 24.2868Z" fill="white"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="11" height="11"><rect x="7.03125" y="7.03125" width="10.9375" height="10.9375" fill="url(#pattern0)"/></mask><g mask="url(#mask0)"><rect x="6" y="6" width="13" height="13" fill="#118BDD"/></g><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.0714286)"/></pattern><image id="image0" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTIxVDA1OjAzOjQwKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yMVQwNTowNjo1NiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0yMVQwNTowNjo1NiswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MzEwYTU4Ni03MmRhLWY4NDktYmI3NC0yNzRhOThjNTIwY2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMGE1ODYtNzJkYS1mODQ5LWJiNzQtMjc0YTk4YzUyMGNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMGE1ODYtNzJkYS1mODQ5LWJiNzQtMjc0YTk4YzUyMGNlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzEwYTU4Ni03MmRhLWY4NDktYmI3NC0yNzRhOThjNTIwY2UiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjFUMDU6MDM6NDArMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZeVJMAAAA+UlEQVQokZ3SPysFUBjH8R/p+lNKJgMmWUTWWzZvQQajDF6A16BM3oGyk91ikKSUUmIwyCKxXSX587GcW4eu4XrqDM+f73Oe53dOD16TDKQ7e+qBLqEkeentEJTkNslykqUk1x1RP+0N25hAypnCJt6rulYNnmC2AoYxUvlz2CsNWsFDAXerokVc4AzNKj6IVVwFkziswFGcV5Mco7/kNjCORm+S5ySrSU7L2u+/ZPhM0haxmWQnyVhwjzUMVSM1y01HmK/i+2WKu7Y4Hzj4VTSERuUv4LKTqu0GW5iugJmy/9dfz1HbDVawjscO+da/v1xfUbXbT/78DeaKo+ra0h6SAAAAAElFTkSuQmCC"/></defs>'

}
let mypopup = document.querySelector(".map__dropdowncard");
function revertChangeSVG (numOfPoint , numOfArea) {
    let pointID = '.point' + numOfPoint;
    let point = document.querySelector(pointID);
    let areaID = '.reg' + numOfArea;
    let area = document.querySelector(areaID);
    area.firstChild.nextElementSibling.setAttribute('fill' , '#F2F2F2')
    point.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.638 24.2868C17.8381 23.9402 18.1399 23.6656 18.491 23.4735C22.3696 21.3514 25 17.2329 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 17.2335 2.63106 21.3525 6.51052 23.4743C6.86173 23.6664 7.16366 23.9411 7.36382 24.2878L10.7686 30.1849C11.5384 31.5183 13.4629 31.5183 14.2327 30.1849L17.638 24.2868Z" fill="#118BDD"/><rect x="7.03125" y="7.03125" width="10.9375" height="10.9375" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.0714286)"/></pattern><image id="image0" width="14" height="14" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTIxVDA1OjAzOjQwKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yMVQwNTowNjo1NiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0yMVQwNTowNjo1NiswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MzEwYTU4Ni03MmRhLWY4NDktYmI3NC0yNzRhOThjNTIwY2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMGE1ODYtNzJkYS1mODQ5LWJiNzQtMjc0YTk4YzUyMGNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMGE1ODYtNzJkYS1mODQ5LWJiNzQtMjc0YTk4YzUyMGNlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzEwYTU4Ni03MmRhLWY4NDktYmI3NC0yNzRhOThjNTIwY2UiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjFUMDU6MDM6NDArMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZeVJMAAAA+UlEQVQokZ3SPysFUBjH8R/p+lNKJgMmWUTWWzZvQQajDF6A16BM3oGyk91ikKSUUmIwyCKxXSX587GcW4eu4XrqDM+f73Oe53dOD16TDKQ7e+qBLqEkeentEJTkNslykqUk1x1RP+0N25hAypnCJt6rulYNnmC2AoYxUvlz2CsNWsFDAXerokVc4AzNKj6IVVwFkziswFGcV5Mco7/kNjCORm+S5ySrSU7L2u+/ZPhM0haxmWQnyVhwjzUMVSM1y01HmK/i+2WKu7Y4Hzj4VTSERuUv4LKTqu0GW5iugJmy/9dfz1HbDVawjscO+da/v1xfUbXbT/78DeaKo+ra0h6SAAAAAElFTkSuQmCC"/></defs>'
    hidePopup();

}

function hover (numOfArea , numOfPoint) {
     changeSVG(numOfPoint);
     let areaID = '.reg' + numOfArea;
     let area = document.querySelector(areaID);
     area.firstChild.nextElementSibling.setAttribute('fill' , '#118BDD');
     showPopup(numOfPoint);
}


/*myicon.addEventListener("mouseover", showPopup);*/

function showPopup(n) {
  let point = ".point" + n;
  let myicon = document.querySelector(point);
  let iconPos = myicon.getBoundingClientRect();
  mypopup.style.left = (iconPos.right - 170) + "px";
  mypopup.style.top = (iconPos.top + 30 + pageYOffset) + "px";
  mypopup.style.display = "block";
}

function hidePopup() {
    mypopup.style.display = "none";
}

////////////////////////////////////
//About Slider/////////////////////

