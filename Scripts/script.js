const gt = document.getElementById("GT");
const porsche = document.getElementById("pList");
const amgGt = document.getElementById("amg-gt")
const merc = document.getElementById("mercedes")
const bmw = document.getElementById("m5")
const Bmw = document.getElementById("bmw")


const translateRight = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateX(400px)";
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
};

const translateRightObserver = new IntersectionObserver(translateRight, {
  threshold: 0.5,
});
translateRightObserver.observe(gt);
translateRightObserver.observe(bmw)


let fade = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
};

let fadeObserver = new IntersectionObserver(fade, {
  threshold: 0.5,
});
fadeObserver.observe(porsche);
fadeObserver.observe(merc);
fadeObserver.observe(Bmw)

const translateLeft = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateX(-250px)";
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
};

const translateLeftObserver = new IntersectionObserver(translateLeft, {
  threshold: 0.5,
}) 
translateLeftObserver.observe(amgGt)