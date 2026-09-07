const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0, transform:"translateY(22px)"},{opacity:1, transform:"translateY(0)"}],
        {duration:650, easing:"cubic-bezier(.2,.8,.2,1)", fill:"forwards"}
      );
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".card,.strength,.project,.intro > *,.section-heading").forEach(el => {
  el.style.opacity = "0";
  reveal.observe(el);
});
