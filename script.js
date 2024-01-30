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

document.ontouchmove = event => {
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
  const lenis = new Lenis()
  
  lenis.on('scroll', (e) => {
  
  })
  
  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
  
  
  /*
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

  */
  
  const captions = document.querySelectorAll('.descriptor')
  
  captions.forEach((cap,i) => {
  
  
  gsap.to(cap, {
    
     y:-10,
    duration: 4,
    ease: "power1.inOut",
    scrollTrigger: {
    
      trigger:cap, 
  
      start: 'top 80%',
                  end: 'top 50%',
      toggleActions: 'play play reverse reverse'// start the animation when ".box" enters the viewport (once)
   }
  });

  gsap.fromTo(cap, 
    {
      opacity:0,
    },
     {opacity:1,
    duration: 1,
    ease: "power1.Out",
    scrollTrigger: {
    
      trigger:cap, 
  
      start: 'top 80%',
      end: 'top 90%',        
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
    duration: 1,
    ease: "power1.Out",
    scrollTrigger: {
    
      trigger:image, 
  
      start: 'top 90%',
      end: 'top 50%',        
      toggleActions: 'play play reverse reverse'// start the animation when ".box" enters the viewport (once)
   }
  
  })

  

  })
  
}  
initScroll();  

window.addEventListener("scroll", function() {
  // Get the current scroll position
  var scrollPosition = window.scrollY;
console.log("scrollposition: "+scrollPosition);
  // Map the scroll position to an opacity value between 0 and 1
  var opacity = 1 - scrollPosition / 150;
  var opacity2 = 1 - scrollPosition / 100;
  // Ensure that the opacity is within the valid range [0, 1]
  opacity = Math.max(0, Math.min(1, opacity));

      opacity2 = Math.max(0, Math.min(1, opacity2));
 
  // Set the opacity of the div
  document.getElementById("title").style.opacity = opacity;
  document.getElementById("subtitle").style.opacity = opacity2;
});



