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
  circle.style.backgroundColor = "#6D7BCD";
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
    x += (nextCircle.x - x) * 0.7;
    y += (nextCircle.y - y) * 0.7;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

 
                
function initScroll(){
  gsap.registerPlugin(ScrollTrigger)
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
  
  
  
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


function titlize(clickedElement) {
 
  var fadeHeadersBefore = document.querySelectorAll('.menu-item');

fadeHeadersBefore.forEach(function(menuItem) {
    // Do something with each '.menu-item' element
    menuItem.style.pointerEvents = "none"; // Example: Log the text content of each menu item
    // You can perform any other actions or manipulations here
});
}



          document.addEventListener('DOMContentLoaded', function() {
            // Get all elements with the class "fadeHeader"
            var fadeHeadersBefore = document.querySelectorAll('.menu-item');
     

            const fadeHeaders = []

for(let i = fadeHeadersBefore.length - 1; i >= 0; i--) {
  const valueAtIndex = fadeHeadersBefore[i]
  
  fadeHeaders.push(valueAtIndex)
}
            // Function to apply fade-in effect to each header
            function fadeInHeader(header, index) {
              setTimeout(function() {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
              }, 150 * index); // Adjust the delay as needed for each header
            
             
              
            }
      
            // Iterate through each header and apply the fade-in effect
            fadeHeaders.forEach(function(header, index) {
              fadeInHeader(header, index);
             
            }
            
            );


            setTimeout(() => {
      console.log("HAHAHAHA");
      fadeHeaders.forEach(function(header) {
  // Perform some action on each header element
  header.style.pointerEvents = "all";// Change opacity as an example
        });

        
      }, 1700);
          });
         
        
           const myText = new SplitType('#name')
            
              gsap.to('.char', {
              y: 0,
              ease: "expo.out",
              delay: 0.7,
              duration: 2.0
            })
            const myText1 = new SplitType('#name1')
              gsap.to('.char', {
              y: 0,
              ease: "expo.out",
              delay: 0.9,
              duration: 2.0
            })
   
       
            /* barba.init({
                transitions: [{
                  sync:false,
                  name: 'opacity-transition',
              
               leave(data) {
               
                 animationLeave(data.current.container, data);
                data.current.container.childNodes[1].childNodes[1].classList.add("snapback");
              },
   
               enter(data) {
                return gsap.from(data.next.container, {
                  delay:2,
        opacity: 0,
        duration:1.0
        
      });
              }
            }]
          });


          const animationEnter = (container, data) => {
            const timeline = gsap.timeline();
            console.log(container.childNodes[3]);
            timeline.to(container.childNodes[3], { opacity: 1, duration: 0.25,  ease: 'none' });


return timeline;


          }




          const animationLeave = (container, data) => {
  
  var arrayOfDivs = [];
  
 
 
 for(let i=1;i<10;i +=2){
  var head = container.childNodes[1].childNodes[1].childNodes[1].childNodes[i];
 
  if(data.trigger != head){
    arrayOfDivs.push(head);
  }

 } 


 const timeline = gsap.timeline();
    
      
      timeline.to(container.childNodes[1].childNodes[1], {scale: 0.5, perspective: 'none',rotateY: 0,duration: 0.4, ease: 'power2.inOut' });
     // timeline.to(container.childNodes[1].childNodes[1], {rotateY: 0,duration: 0.5, ease: 'power2.inOut' });
      timeline.to(arrayOfDivs, { autoAlpha: 0,stagger:0.05, duration: 0.25,  ease: 'none' });
      timeline.to(container.childNodes[1].childNodes[1], {  y: "-13.58vw",  duration: 0.4,  ease: 'power2.inOut' });
  // 
    return timeline;
    }*/

  
    const animationEnterMenu = (container) => {
      console.log("animationEnterMenu");
   const timeline = gsap.timeline();
   
   var fadeHeadersBefore = document.querySelectorAll('.menu-item');
     

     const fadeHeaders = []

for(let i = fadeHeadersBefore.length - 1; i >= 0; i--) {
const valueAtIndex = fadeHeadersBefore[i]

fadeHeaders.push(valueAtIndex)
}
     // Function to apply fade-in effect to each header
     function fadeInHeader(header, index) {
       setTimeout(function() {
         header.style.opacity = '1';
         header.style.transform = 'translateY(0)';
       }, 150 * index); // Adjust the delay as needed for each header
     
      
       
     }

     // Iterate through each header and apply the fade-in effect
     fadeHeaders.forEach(function(header, index) {
       fadeInHeader(header, index);
     
     }
     
     );
     setTimeout(() => {
      console.log("HAHAHAHA");
      fadeHeaders.forEach(function(header) {
  // Perform some action on each header element
  header.style.pointerEvents = "all";// Change opacity as an example
        });

        
      }, 1700);

     
   
 
 /*  var arrayOfDivs = [];
  
 

for(let i=1;i<10;i +=2){
 var head = container.childNodes[1].childNodes[1].childNodes[1].childNodes[i];
console.log("HEAD "+i+head);
 


   arrayOfDivs.push(head);
 

}
timeline.to(arrayOfDivs, {  autoAlpha: 1,stagger:0.2, duration: 0.5,  ease: 'none' });   */




timeline.to(container, { delay: 2,autoAlpha: 1, duration: 2, clearProps: 'all', ease: 'none'});
  
  
   return timeline;
}

    
  
    const animationEnter = (container) => {
   
      const timeline = gsap.timeline();
      
      console.log("CUM"+container.childNodes.values());
      for (var index = 0; index < container.childNodes.length; index++) {
    console.log(index+" "+container.childNodes[index]);
}
     
console.log(container.childNodes);

timeline.from(container, { delay: 2,autoAlpha: 0, duration: 1, ease: 'none'});
      //timeline.from(container.childNodes[3], { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
      //timeline.from(container.childNodes[5], { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
      //timeline.from(container.childNodes[7], { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
      return timeline;
}
 
const animationLeaveMenu = (data) => {
  console.log("animationLeaveMenu");
  
  /* */
  const arrayOfDivs = [];
  
   arrayOfDivs.push(data.trigger);
 
 for(let i=1;i<10;i +=2){
  var head = data.current.container.childNodes[1].childNodes[1].childNodes[1].childNodes[i];
 console.log("HEAD "+i+head);
  
 
 if(data.trigger != head){
    arrayOfDivs.push(head);
  }

 } 

 arrayOfDivs.forEach(function(header) {
  // Perform some action on each header element
  header.style.pointerEvents = "none";// Change opacity as an example
        });
 const timeline = gsap.timeline();
    
 
let x =0;

switch (data.trigger.id) {
  case "1":
  x =-40;
  break;
  case "2":
  x =-34.5;
  break;
  case "3":
  x =-49;
  break;
  case "4":
  x =-63.5;
  break;
  case "5":
  x =-78;
  break;
  
}
/**/ 
console.log(x);
      timeline.to(data.current.container.childNodes[1].childNodes[1], {scale: 0.6, perspective: 'none',rotateY: 0,duration: 0.4, ease: 'power2.inOut' });
     // timeline.to(container.childNodes[1].childNodes[1], {rotateY: 0,duration: 0.5, ease: 'power2.inOut' });
     // timeline.to(arrayOfDivs, { autoAlpha: 0,stagger:0.05, duration: 0.25,  ease: 'none' });
      timeline.to(arrayOfDivs, {  autoAlpha: 0,stagger:0.2, duration: 0.5,  ease: 'none' });
      console.log(data.trigger.childNodes[0]);
    
      data.current.container.childNodes[3].style.transition = 'transform 0.5s ease-inout';
data.current.container.childNodes[3].style.transform = `translateY(-55px)`;

setTimeout(() => {
  data.current.container.childNodes[5].style.transition = 'transform 0.5s ease-inout';
  data.current.container.childNodes[5].style.transform = `translateX(-60px)`;
}, 50);
      setTimeout(() => {
        //data.trigger.childNodes[0].style.transition = 'transform 0.5s ease-out';
       // data.trigger.childNodes[0].style.transform = `translateX(150vw)`;
}, 300);

//data.trigger.childNodes[0].style = "opacity: 1; pointer-events: none;"
  
  
  timeline.to(data.current.container, {delay:1.5, autoAlpha: 0, duration: 0, clearProps: 'all', ease: 'none'});
  return timeline;

}

const animationLeavePage = (data) => {

  const timeline = gsap.timeline();
  console.log("animationLeavePage"+data.current.container.childNodes[7].childNodes[0]);
  
  //timeline.to(data.current.container.childNodes[7], { delay: 0,y: 60, duration: 1, clearProps: 'all', ease: 'none'});
      timeline.to(data.current.container, { delay: 0,autoAlpha: 0, duration: 0.4, clearProps: 'all', ease: 'none'});
      //timeline.from(container.childNodes[3], { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
      //timeline.from(container.childNodes[5], { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
      //timeline.from(container.childNodes[7], { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'});
      return timeline;
}


barba.init({
    transitions: [
        {sync:true,
           
            leave: (data) => animationLeaveMenu(data),
            enter: ({next}) => {
                console.log('entering');
                animationEnter(next.container);
                initScroll();
            }
        },{
            name: 'back',
            priority: 1,
            custom: ({ trigger }) => {return trigger === 'back'},
           
            leave: (data) => animationLeavePage(data),
            enter: ({next}) => {
           
              console.log('BACKBACK');
             
              animationEnterMenu(next.container);
            
            }
          }
    ]
});
      


