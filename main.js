// We listen to the resize event
 window.addEventListener('DOMContentLoaded', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }); 
 
  //====================================
function clickAdaptive() {
    const button = document.querySelector('.header_nav_button')
    const menu = document.querySelectorAll('.nav_list')
    const body = document.querySelector('.body')
    const links = document.querySelectorAll('.nav_list_items')
    let windowWidth = innerWidth

    button.addEventListener('click', () => {

        menu.forEach(item => {
            item.classList.toggle('_active')
        })
        button.classList.toggle('_active')
        body.classList.toggle('_active')

    })

    links.forEach(link => {

        if (windowWidth < 768) {

            link.addEventListener('click', () => {

                menu.forEach(item => {
                    item.classList.toggle('_active')
                })
                button.classList.toggle('_active')
                body.classList.toggle('_active')

            })
        }

    })
}

clickAdaptive()

//======Анимация при скроле====
const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)

    function animOnScroll() {

        animItems.forEach(item => {
            const animeItem = item
            const animItemHeight = animeItem.offsetHeight
            const animeItemOffset = offset(animeItem).top
            const animStart = 4


            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemPoint > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animeItemOffset - animItemPoint) && pageYOffset < (animeItemOffset + animItemHeight)) {
                animeItem.classList.add('_active')

            } else {
                if (!animeItem.classList.contains('anime-no-hide')) {
                    animeItem.classList.remove('_active')
                }

            }
        })
    }



    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)

}

//==============================


//============Карта===============
let center = [52.26533828843425, 49.0994052711639];
let cafe = [52.274800071882325,49.11259449999999];

function init() {

    let map = new ymaps.Map('map', {
        center: center,
        zoom: 17,
    });

    let placeMark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/zags.png',
        iconImageSiza: [20, 30],
        iconImageOffset: [-15, -45],
    })

    let placeMarkCafe = new ymaps.Placemark(cafe, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-cafe.png',
        iconImageSiza: [20, 30],
        iconImageOffset: [-15, -45],
    })
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(placeMark);
    map.geoObjects.add(placeMarkCafe);
}

ymaps.ready(init);
//=================================



//=====Таймер обратного отсчета=======

document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('September 9 2022 00:00:00');

    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    const daysText = document.querySelector('.time-count__days .time-count__text');
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    };

    timeCount();
    setInterval(timeCount, 1000);
});

//====================================================

//=====Очистка формы===============================

    
document.addEventListener('click', (e) => { 
    
    // Очищаем поля формы 
        e.target.reset(); 
    });

//=================================================

