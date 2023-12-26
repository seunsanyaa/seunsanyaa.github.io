const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener("DOMContentLoaded", function() {
    let lazyBgElements = document.querySelectorAll(".lazy-bg");

    if ("IntersectionObserver" in window) {
        let lazyBgObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.backgroundImage = "url(" + entry.target.dataset.src + ")";
                    lazyBgObserver.unobserve(entry.target);
                }
            });
        });

        lazyBgElements.forEach(function(element) {
            lazyBgObserver.observe(element);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyBgElements.forEach(function(element) {
            element.style.backgroundImage = "url(" + element.dataset.src + ")";
        });
    }
});
