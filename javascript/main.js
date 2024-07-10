// // JavaScript for interactive features

// // Smooth scroll for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// // Scroll reveal animation
// const scrollElements = document.querySelectorAll('.storyline-item');

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add('scrolled');
// };

// const hideScrollElement = (element) => {
//   element.classList.remove('scrolled');
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     } else {
//       hideScrollElement(el);
//     }
//   });
// }

// window.addEventListener('scroll', () => {
//   handleScrollAnimation();
// });

  