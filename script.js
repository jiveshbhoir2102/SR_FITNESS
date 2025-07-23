// Scroll Animation
const elements = document.querySelectorAll(".scroll-element");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));


// Card Slider
var swiper = new Swiper(".trainer-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
});

// Form submitted
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  // Show success message
  const successMsg = document.getElementById('successMessage');
  successMsg.style.display = 'block';

  // Optional: Clear form fields
  document.getElementById('contactForm').reset();

  // Hide message after 3 seconds
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
});

// added a Video
window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.fade-in, .zoom-in').forEach(element => {
    observer.observe(element);
  });
});








