/*let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body container tape tape_content section");
let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
// _.throttle(doThatStuff, 100);
// });
console.log(mainNavLinks);
window.addEventListener("scroll", event => { 
    let fromTop = window.scrollY; 
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash); 
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) { 
            link.classList.add("current"); 
        } else { 
            link.classList.remove("current"); 
        } 
    }); 
});
*/
// wait for the DOM to finish loading
document.addEventListener('DOMContentLoaded', () => {
const navLinks = document.querySelectorAll('nav ul li a');
console.log(navLinks);
window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;
  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
            console.log(link.getAttribute('href'));
            if (link.getAttribute('href') === `#${section.id}`) {
                link.classList.add('current');
            } else {
                console.error('no match');
                link.classList.remove('current');
            }
      });
    }
  });
});
});