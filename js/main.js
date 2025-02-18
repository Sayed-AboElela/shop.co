document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("btn--mobile--menu");
    const closeButton = document.getElementById("btn--close");
    const navlist = document.getElementById("navlist");
    const searchToggle = document.getElementById("search-toggle");
    const navbar = document.getElementById("navbar");
    const filtersSidebarToggle = document.getElementById("filters-sidebar-toggle");
    const filtersSidebarClose = document.getElementById("filters-sidebar-close");

    function toggleMenu() {
        navlist.classList.toggle("show--mobile--list");
    }

    menuButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);


    searchToggle.addEventListener("click", function () {
        navbar.classList.toggle("search-active");
    });

    // const prev = document.getElementById("prev-btn");
    // const next = document.getElementById("next-btn");
    // const list = document.getElementById("testimonial--list");
    // const itemWidth = 300;
    //
    // prev.addEventListener("click", () => {
    //     console.log("click prev");
    //
    //     list.scrollLeft -= itemWidth;
    // });
    // next.addEventListener("click", () => {
    //     list.scrollLeft += itemWidth;
    // });

    filtersSidebarToggle.addEventListener("click", function () {
        document.querySelector('.filters-sidebar').classList.toggle('open');
    })
    filtersSidebarClose.addEventListener("click", function () {
        document.querySelector('.filters-sidebar').classList.remove('open');
    })

    const collapsibles = document.querySelectorAll(".collapsible > .collapsible__toggle");

    // const priceSliderInput = document.getElementById("price__slider");
    // const priceSliderValue = document.getElementById("price__slider__value");
    //
    // priceSliderInput.addEventListener("input", function (event) {
    //     priceSliderValue.textContent = event.target.value;
    // })

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener("click", function (event) {
            event.preventDefault();
            this.parentElement.classList.toggle("collapsible--expanded");
        })
    })


    const minRange = document.getElementById('minRange');
    const maxRange = document.getElementById('maxRange');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const sliderTrack = document.querySelector('.slider-track');

    const minGap = 10;
    const maxVal = 500;

    function updateSlider() {
        let minVal = parseInt(minRange.value);
        let maxVal = parseInt(maxRange.value);

        if (maxVal - minVal <= minGap) {
            if (event.target === minRange) {
                minRange.value = maxVal - minGap;
            } else {
                maxRange.value = minVal + minGap;
            }
        }

        minVal = parseInt(minRange.value);
        maxVal = parseInt(maxRange.value);

        minPrice.textContent = `$${minVal}`;
        maxPrice.textContent = `$${maxVal}`;

        const leftPercent = (minVal / maxVal) * 100;
        const rightPercent = 100 - (maxVal / 500) * 100;

        sliderTrack.style.left = `${(minVal / 500) * 100}%`;
        sliderTrack.style.right = `${100 - (maxVal / 500) * 100}%`;
    }

    minRange.addEventListener('input', updateSlider);
    maxRange.addEventListener('input', updateSlider);

    updateSlider();


});
