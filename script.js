const balls = document.getElementsByClassName('pupil');

document.onmousemove = event => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

};
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "#1A2EFF";
  //circle.style.backgroundColor = "#EAAF05";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

 
                
function initScroll(){
  gsap.registerPlugin(ScrollTrigger)
  
  const splitTypes = document.querySelectorAll('.reveal-type')
  
  splitTypes.forEach((char,i) => {
  
      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor
  
      const text = new SplitType(char, { types: 'chars'})
  
      gsap.fromTo(text.chars, 
          {
              color: bg,
          },
          {
                        
              color: fg,
              duration: 0.3,
              stagger: 0.02,
              scrollTrigger: {
                  trigger: char,
                  start: 'top 80%',
                  end: 'top 50%',
                  scrub: true,
                  markers: false,
                  toggleActions: 'play play reverse reverse'
              }
      })
  })
  
  
  const lenis = new Lenis()
  
  lenis.on('scroll', (e) => {
  console.log(e)
  })
  
  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
  
  const captions = document.querySelectorAll('.descriptor')
  
  /**/captions.forEach((cap,i) => {
  
  
  gsap.to(cap, {
    
     y:-60,
    duration: 4,
    ease: "power1.inOut",
    scrollTrigger: {
    
      trigger:cap, 
  
      start: 'top 80%',
                  end: 'top 50%',
      toggleActions: 'play play reverse reverse'// start the animation when ".box" enters the viewport (once)
   }
  });
  })
  
  const images = document.querySelectorAll('.screenshot')
  
  images.forEach((image,i) => {
  
  
  gsap.fromTo(image, 
    {
      opacity:0,
    },
     {opacity:1,
    duration: 2,
    ease: "power1.Out",
    scrollTrigger: {
    
      trigger:image, 
  
      start: 'top 80%',
                  end: 'top 50%',
      toggleActions: 'play play reverse reverse'// start the animation when ".box" enters the viewport (once)
   }
  
  })
  })
  
}
initScroll();