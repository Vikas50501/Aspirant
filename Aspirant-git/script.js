// preeloader hide 
 window.addEventListener("load", () => {
      setTimeout(() => {
        document.querySelector('.preloader-container').classList.add('fade-out');
        document.querySelector('.main-content').classList.add('visible');
        document.body.style.overflow = 'auto'; // allow scroll after load
      }, 2200); // after plane animation
    });
// testamonials slider


  const reviews = [
            {
                name: "Rajeev Shukla",
                text: "A creative agency providing an innovative and unique solutions to businesses build their brand. A creative agency that truly understands your vision.",
                rating: 4
            },
            {
                name: "Samantha Jones",
                text: "Incredible attention to detail and a passion for their work. They transformed our online presence and exceeded all our expectations.",
                rating: 5
            },
            {
                name: "Michael Chen",
                text: "Highly recommended for their professional and efficient service. The team was a pleasure to work with and delivered a fantastic result on a tight deadline.",
                rating: 4
            },
            {
                name: "Chloe Davis",
                text: "We've been with them for years and they never fail to impress. Their creative solutions are always fresh and effective. Truly a partner we can count on.",
                rating: 5
            },
        ];

        let currentReviewIndex = 0;

        const cardMain = document.querySelector('.card-main');
        const cardWrapper = document.querySelector('.card-wrapper');
        const reviewerName = document.getElementById('reviewer-name');
        const reviewText = document.getElementById('review-text');
        const starsContainer = document.querySelector('.stars');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        function updateCard(index) {
            const oldStacks = document.querySelectorAll('.card-stack');
            oldStacks.forEach(stack => stack.remove());
            starsContainer.innerHTML = '';
            
            const review = reviews[index];

            cardMain.style.opacity = '0';
            setTimeout(() => {
                reviewerName.textContent = review.name;
                reviewText.textContent = review.text;
                
                const fullStars = review.rating;
                const emptyStars = 5 - fullStars;
                
                const starSvg = `<svg class="star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>`;
                const emptyStarSvg = `<svg class="star empty" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>`;
                
                starsContainer.innerHTML = starSvg.repeat(fullStars) + emptyStarSvg.repeat(emptyStars);

                cardMain.style.opacity = '1';

                const stackConfig = [
                    { transform: 'translate(16px, 16px) rotate(-12deg)', opacity: 0.35, zIndex: 1 },
                    { transform: 'translate(10px, 10px) rotate(-6deg)', opacity: 0.55, zIndex: 2 },
                    { transform: 'translate(5px, 5px) rotate(-2deg)', opacity: 0.75, zIndex: 3 }
                ];

                stackConfig.forEach(config => {
                    const stackCard = document.createElement('div');
                    stackCard.className = 'card-stack';
                    stackCard.style.transform = config.transform;
                    stackCard.style.opacity = config.opacity;
                    stackCard.style.zIndex = config.zIndex;
                    cardWrapper.prepend(stackCard);
                });
            }, 300);
        }

        nextBtn.addEventListener('click', () => {
            currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
            updateCard(currentReviewIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
            updateCard(currentReviewIndex);
        });

        document.addEventListener('DOMContentLoaded', () => {
            updateCard(currentReviewIndex);
        });

//   slider  
let currentIndex = 0;
function nextSlide() {
  const wrapper = document.getElementById("sliderWrapper");
  const totalSlides = wrapper.children.length;
  currentIndex = (currentIndex + 1) % totalSlides;
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

//   navbar burger menu
   function toggleMenu(burger) {
      const navLinks = document.getElementById("nav-links");
      navLinks.classList.toggle("active");
      burger.classList.toggle("active");
    }




     // service page Fnq

     document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.accordion-item');

            items.forEach(item => {
                const header = item.querySelector('.accordion-header');
                header.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');

                    // Close all items
                    items.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });
                    
                    // Toggle the clicked item if it wasn't already active
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            });
        });

//slick slider setting
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });
});

// section-2 count animation

const counters = document.querySelectorAll(".col-numbers h1");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.innerText.replace(/\D/g, '');
    const speed = 450 // lower is faster
    const increment = target / speed;
    let count = 0;

    const counting = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count) + "+";
        requestAnimationFrame(counting);
      } else {
        counter.innerText = target + "+";
      }
    };

    counting();
  };

  updateCount();
});



// type writer animation section-3 texts

const element = document.querySelector(".typewriter-text");
const htmlString = `Unleashing Creativity The <br> Unleashing <span class="Success">Success</span>`;
let hasTyped = false; // Prevent multiple runs

// Typewriter function configuration
function startTypewriter() {
  let i = 0;
  let isTag = false;
  let text = "";

  function type() {
    text += htmlString[i];

    if (htmlString[i] === "<") isTag = true;
    if (htmlString[i] === ">") isTag = false;

    element.innerHTML = text;

    i++;
    if (i < htmlString.length) {
      setTimeout(type, isTag ? 0 : 50);
    } else {
      element.classList.add("done"); // Hide cursor
    }
  }

  type();
}
// Observer to detect .section-3 typed

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTyped) {
        hasTyped = true;
        startTypewriter();
      }
    });
  },
  {
    threshold: 0.5, // 50% of section must be visible
  }
);

// Start printing section-3
observer.observe(document.querySelector(".section-3"));

// team-slider

 $(document).ready(function () {
      $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              centerPadding: '15px'
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerPadding: '10px'
            }
          }
        ]
      });
    });

// loader
setTimeout(function () {
  $('.loader_bg').fadeToggle();
}, 1500);


// section-7 FAQs toggle
    const faqs = document.querySelectorAll('.faqs');
    faqs.forEach(faq => {
      faq.addEventListener('click', () => {
        faqs.forEach(item => {
          if (item !== faq) {
            item.classList.remove('active');
            item.querySelector('.answer').style.maxHeight = '0';
          }
        });
        faq.classList.toggle('active');
        const answer = faq.querySelector('.answer');
        if (faq.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = '0';
        }
      });
    });
 


