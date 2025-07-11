
$(document).ready(function () {
    $('.your-class').slick({
        // dots:true,
        fade: true,
        arrows: false,
        speed: 5,
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const counters = document.querySelectorAll(".col-number h1");
//     const speed = 200; // Lower is faster

//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.innerText.replace("+", "");
//             const count = +counter.getAttribute("data-count") || 0;
//             const increment = Math.ceil(target / speed);

//             if (count < target) {
//                 counter.setAttribute("data-count", count + increment);
//                 counter.innerText = (count + increment) + "+";
//                 setTimeout(updateCount, 20);
//             } else {
//                 counter.innerText = target + "+";
//             }
//         };

//         counter.innerText = "0+";
//         updateCount();
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const counters = document.querySelectorAll(".col-number h1");

//     counters.forEach(counter => {
//         const target = parseInt(counter.innerText);
//         counter.innerText = "0+";

//         let count = 0;
//         const increment = Math.ceil(target / 100); // Adjust speed here

//         const updateCounter = () => {
//             if (count < target) {
//                 count += increment;
//                 if (count > target) count = target;
//                 counter.innerText = count + "+";
//                 requestAnimationFrame(updateCounter);
//             } else {
//                 counter.innerText = target + "+";
//             }
//         };

//         updateCounter();
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const counters = document.querySelectorAll(".col-number h1");

//     counters.forEach(counter => {
//         const target = parseInt(counter.innerText);
//         counter.innerText = "0+";

//         let animated = false; // Prevent multiple triggers

//         const updateCounter = () => {
//             let count = 0;
//             const increment = Math.ceil(target / 100);

//             const animate = () => {
//                 if (count < target) {
//                     count += increment;
//                     if (count > target) count = target;
//                     counter.innerText = count + "+";
//                     requestAnimationFrame(animate);
//                 } else {
//                     counter.innerText = target + "+";
//                 }
//             };

//             animate();
//         };

//         counter.addEventListener("mouseenter", function () {
//             if (!animated) {
//                 updateCounter();
//                 animated = true;
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".col-number");
//     const counters = document.querySelectorAll(".col-number h1");

//     // Reset all counters to 0+
//     counters.forEach(counter => {
//         const target = parseInt(counter.innerText);
//         counter.setAttribute("data-target", target);
//         counter.innerText = "0+";
//     });

//     let animated = false;

//     container.addEventListener("mouseenter", () => {
//         if (animated) return;
//         animated = true;

//         counters.forEach(counter => {
//             const target = parseInt(counter.getAttribute("data-target"));
//             let count = 0;
//             const increment = Math.ceil(target / 100);

//             const updateCounter = () => {
//                 if (count < target) {
//                     count += increment;
//                     if (count > target) count = target;
//                     counter.innerText = count + "+";
//                     requestAnimationFrame(updateCounter);
//                 } else {
//                     counter.innerText = target + "+";
//                 }
//             };

//             updateCounter();
//         });
//     });
// });

// Number count animation
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".col-number");
    const counters = document.querySelectorAll(".col-number h1");

    // Store original target values
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        counter.setAttribute("data-target", target);
        counter.innerText = "0+";
    });

    function animateAllCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-target"));
            let count = 0;
            const increment = Math.ceil(target / 150);

            const update = () => {
                if (count < target) {
                    count += increment;
                    if (count > target) count = target;
                    counter.innerText = count + "+";
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + "+";
                }
            };

            counter.innerText = "0+";
            update();
        });
    }

    // Trigger animation when hovering on the entire col-number block
    container.addEventListener("mouseenter", animateAllCounters);
});

// popup for section3
document.addEventListener("DOMContentLoaded", function () {
    const successSpan = document.querySelector(".section3-head span");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                successSpan.classList.add("animate");
                observer.unobserve(entry.target); // Runs only once
            }
        });
    }, {
        threshold: 0.9 // Trigger when 50% of the section is visible
    });

    observer.observe(successSpan);
});

// slider team

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        infinite: true,
        autoplayspeed: 1000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
