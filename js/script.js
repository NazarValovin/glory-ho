"use strict";


document.addEventListener('DOMContentLoaded', () => {


    //Swiper Slider

    const swiperCountries = new Swiper('.index-countries__swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4,
            }
        }
    });

    const swiperGoogleItem = new Swiper('.popular-glory__slider', {
        slidesPerView: 7,
        spaceBetween: 8,
        slidesPerGroup: 7,
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            576: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
            768: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
            992: {
                slidesPerView: 7,
                slidesPerGroup: 7,
            }
        }
    });

    const swiperComments = new Swiper('.commnets-item__slider', {
        slidesPerView: 2,
        slidesPerGroup: 6,
        grid: {
            rows: 3,
            fill: 'row',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 6,
                spaceBetween: 30,
                grid: {
                    fill: 'row',
                    rows: 6,
                },
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 6,
                grid: {
                    fill: 'row',
                    row: 3,
                },
            },
        }
    });

    const swiperGlory = new Swiper('.region__slider', {
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                    fill: 'row',
                    rows: 6,
                },
            },
            576: {
                slidesPerView: 2,
                slidesPerGroup: 12,
                grid: {
                    fill: 'row',
                    rows: 6,
                },
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 18,
                grid: {
                    fill: 'row',
                    rows: 6,
                },
            },
            1100: {
                slidesPerView: 4,
                slidesPerGroup: 24,
                grid: {
                    fill: 'row',
                    rows: 6,
                },
            }
        }
    });



    // Laguage Header

    function languageActive() {
        const headerLanguage = document.querySelector('.language-header__header');
        const bodyLanguage = document.querySelector('.language-header__body');
        const imgHeaderLanguage = document.querySelector('.language-header__img img');
        const imgItemLanguage = document.querySelectorAll('.language-header__item-img img');
        const itemLanguage = document.querySelectorAll('.language-header__item');

        const div = document.createElement('div');
        div.classList.add('_forClick');

        if (headerLanguage) {
            headerLanguage.addEventListener('click', () => {
                headerLanguage.classList.toggle('_active');
                bodyLanguage.classList.toggle('_active');

                if (bodyLanguage.classList.contains('_active')) {
                    document.body.append(div);
                    div.addEventListener('click', () => {
                        headerLanguage.classList.remove('_active');
                        bodyLanguage.classList.remove('_active');
                        div.remove();
                    });
                }
            });
            for (let index = 0; index < itemLanguage.length; index++) {
                const element = itemLanguage[index];

                element.addEventListener('click', () => {
                    imgHeaderLanguage.src = imgItemLanguage[index].src;
                    headerLanguage.classList.remove('_active');
                    bodyLanguage.classList.remove('_active');
                    div.remove();
                });
            }
        }
    }

    languageActive();



    // Burger

    function burgerClick() {
        const burger = document.querySelector('.header__burger');
        const btn = document.querySelector('.header__btn');
        const menu = document.querySelector('.header__nav');
        const body = document.body;

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');

        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                body.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
            });

            if (document.documentElement.clientWidth <= 934) {
                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', menu);
            }

            if (document.documentElement.clientWidth <= 481) {
                menuMobile.insertAdjacentElement('beforeend', btn);
            }
        }
    }

    burgerClick();


    //Search Click

    function inputSearchClick() {
        const input = document.querySelector('.navigation__search input');
        const navigationWrapper = document.querySelector('.navigation');
        const btn = document.querySelector('.navigation__search button');
        const form = document.querySelector('.navigation__search form');

        const div = document.createElement('div');
        div.classList.add('_forClick');

        if (form) {
            form.addEventListener('click', () => {
                form.classList.add('_active');
                navigationWrapper.classList.add('_active');
                document.body.append(div);
                div.addEventListener('click', () => {
                    form.classList.remove('_active');
                    navigationWrapper.classList.remove('_active');
                    div.remove();
                });
            });
            btn.addEventListener('click', () => {
                if (form.classList.contains('_active')) {
                    form.classList.remove('_active');
                    navigationWrapper.classList.remove('_active');
                    div.remove();
                }
            });
        }
    }

    inputSearchClick();



    // Google Api

    function clickSliderPlaceItem(marker, infowindow, map) {
        const item = document.querySelectorAll('.popular-glory__slide');

        for (let index = 0; index < item.length; index++) {
            const element = item[index];

            element.addEventListener('click', () => {
                const childTitle = element.querySelector('.popular-glory__slide-place');

                if (childTitle.textContent.trim() === marker.title.trim()) {
                    findActiveItem(marker.title);
                    findActiveMarker();

                    infowindow.open({
                        anchor: marker,
                        map,
                        shouldFocus: false,
                    });
                }
            });
        }
    }

    function findActiveMarker() {
        const activeMarker = document.querySelector('.gm-ui-hover-effect');
        if (activeMarker) {
            activeMarker.click();
        }
    }

    function checkClassSlidePlace() {
        const item = document.querySelectorAll('.popular-glory__slide');

        for (let index = 0; index < item.length; index++) {
            const element = item[index];

            if (element.classList.contains('_active')) {
                element.classList.remove('_active');
            }
        }
    }

    function findActiveItem(marker) {
        const titlePlace = document.querySelectorAll('.popular-glory__slide-place');
        for (let index = 0; index < titlePlace.length; index++) {
            const element = titlePlace[index];

            if (marker.trim() === element.textContent.trim()) {
                if (element.closest('.popular-glory__slide')) {

                    const itemAtribute = element.closest('.popular-glory__slide').getAttribute('aria-label');
                    const itemAtributeNumber = itemAtribute.split('/');
                    swiperGoogleItem.slideToLoop(Number(itemAtributeNumber[0]));

                    checkClassSlidePlace();

                    element.closest('.popular-glory__slide').classList.add('_active');
                }
            }
        }
    }

    function addPlaceGoogleApi(position, map, title, description, url) {
        let contentString =
            `  
            <div class = 'marker-wrapper'>
                <a href='${url}' class = 'marker-title'>
                    ${title}
                </a>
                <div class = 'marker-info'>
                    ${description}
                </div>
                <a href='${url}' class = 'marker-link'>
                    <div class = 'marker-link-comments'>
                        <img src="./img/icons/comments.svg" alt="">
                        <span>Read comments</span>
                    </div>
                    <div class = 'marker-link-star'>
                        <img src="./img/icons/stars.svg" alt="">
                    </div>
                </a>
            </div>
        `;

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        const marker = new google.maps.Marker({
            position: position,
            icon: './img/icons/placeholder.svg',
            title: title,
            map: map,
        });


        marker.addListener("click", () => {
            findActiveMarker();

            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
            marker.icon = './img/icons/placeholder-active.svg';

            findActiveItem(marker.title);
        });

        clickSliderPlaceItem(marker, infowindow, map);

    }

    function initMap() {
        const placeMap = document.querySelector('.popular-glory__map-item');
        const placeMapGps = document.querySelectorAll('.popular-glory__slide-gps span');
        const title = document.querySelectorAll('.popular-glory__slide-place');
        const description = document.querySelectorAll('.popular-glory__slide-info');
        const url = document.querySelectorAll('.popular-glory__slide-url');

        if (placeMap) {
            const map = new google.maps.Map(
                placeMap,
                {
                    zoom: 9,
                    center: { lat: 50.4546600, lng: 30.5238000 },
                    mapTypeControl: true,
                }
            );
            for (let index = 0; index < placeMapGps.length; index++) {
                const element = placeMapGps[index];
                let str = element.textContent.split(',');

                addPlaceGoogleApi({ lat: Number(str[0]), lng: Number(str[1]) }, map, title[index].textContent, description[index].textContent, url[index].textContent.trim());
            }
        }
    }

    initMap();



    // Google Map Single Page

    function initMapSiglePage() {
        const mapItem = document.querySelector('.single-information__map-item');
        const mapPosition = document.querySelector('.single-information__gps span');
        const title = document.querySelector('.single-information__desc h1');
        const text = document.querySelector('.single-information__gps-descr');

        if (mapItem) {
            let str = mapPosition.textContent.split(',');

            let contentString =
                `  
                <div class = 'marker-wrapper'>
                    <div class = 'marker-title'>
                        ${title.textContent}
                    </div>
                    <div class = 'marker-info'>
                        ${text.textContent}
                    </div>
                </div>
            `;

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
            });

            const map = new google.maps.Map(
                mapItem,
                {
                    zoom: 11,
                    center: { lat: Number(str[0]), lng: Number(str[1]) },
                    mapTypeControl: true,
                }
            );
            const marker = new google.maps.Marker({
                position: map.center,
                icon: './img/icons/placeholder-active.svg',
                map: map,
            });
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        }
    }

    initMapSiglePage();



    // Api countries and Region

    function removeApiRegion(selectRegion) {
        const option = selectRegion.querySelectorAll('option');
        if (option.length > 0) {
            option.forEach(element => {
                element.remove();
            });
            selectRegion.setAttribute('disable', true);
        }
    }

    function initApiRegion(region, selectRegion) {
        region.forEach(element => {
            const option = document.createElement('option');
            option.textContent = element.name;
            option.setAttribute('value', option.textContent);
            selectRegion.append(option);
        });
    }

    async function initApiCountries(selectCoutry, selectRegion) {

        await fetch('https://countriesnow.space/api/v0.1/countries/states', {
            method: 'GET',
            redirect: 'follow',

        }).then(data => data.json())
            .then(respons => {
                respons.data.forEach(item => {
                    if (item) {
                        const option = document.createElement('option');
                        option.textContent = item.name;
                        option.setAttribute('value', option.textContent);
                        selectCoutry.append(option);

                        selectCoutry.addEventListener('change', () => {
                            if (selectCoutry.value === item.name) {
                                removeApiRegion(selectRegion);
                                initApiRegion(item.states, selectRegion);
                                if (item.states.length > 0) {
                                    selectRegion.removeAttribute("disabled");
                                }
                            }
                        });
                    }

                });

            });
    }

    function selectForm() {
        const selectCoutry = document.querySelector('#select-country');
        const selectRegion = document.querySelector('#select-region');
        if (selectCoutry) {
            initApiCountries(selectCoutry, selectRegion);
        }
    }

    selectForm();




    // Google Speed

    function fastGoogleSpeed() {
        const offer = document.querySelector('.index-offer');
        const items = document.querySelectorAll('.none');

        if (offer) {
            window.addEventListener('scroll', () => {
                const windowHeight = document.documentElement.clientHeight;
                if (window.pageYOffset >= 200) {
                    for (let index = 0; index < items.length; index++) {
                        const element = items[index];
                        element.classList.remove('none');
                    }
                }
            });
        }
    }
    fastGoogleSpeed();








});