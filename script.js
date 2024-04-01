console.log("LENISFIXED");

var body = document.body;
var html = document.documentElement;

// Set the height of the body or html element

window.onload = function() {
  setTimeout(function() {
    
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
    
    // Your code to execute after 2 seconds
      console.log("2 seconds have passed since the page loaded.");
  }, 1000); // 2000 milliseconds = 2 seconds
};


function restartLenis(){
   
   setTimeout(function() {
    
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
   console.log(e)
})

 function raf(time) {
   lenis.raf(time)
   requestAnimationFrame(raf)
 }

 requestAnimationFrame(raf)
   lenis.resize()
   // Your code to execute after 2 seconds
   console.log("2 seconds have passed since the page loaded.");
 }, 2000);
};
console.log("UPDATESARRIVED");
const balls = document.getElementsByClassName("pupil");
//commit test
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};

document.ontouchmove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "#EDEDED";
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

function initScroll() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.ticker.lagSmoothing(0);



  const captions = document.querySelectorAll(".descriptor");

  captions.forEach((cap, i) => {
    gsap.to(cap, {
      y: -10,
      duration: 4,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: cap,

        start: "top 80%",
        end: "top 50%",
        toggleActions: "play play reverse reverse", // start the animation when ".box" enters the viewport (once)
      },
    });

    gsap.fromTo(
      cap,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.Out",
        scrollTrigger: {
          trigger: cap,

          start: "top 80%",
          end: "top 90%",
          toggleActions: "play play reverse reverse", // start the animation when ".box" enters the viewport (once)
        },
      },
    );
  });

  const images = document.querySelectorAll(".screenshot");

  images.forEach((image, i) => {
    gsap.fromTo(
      image,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.Out",
        scrollTrigger: {
          trigger: image,

          start: "top 90%",
          end: "top 50%",
          toggleActions: "play play reverse reverse", // start the animation when ".box" enters the viewport (once)
        },
      },
    );
  });
}
initScroll();


        window.addEventListener("scroll", function () {

        var scrollPosition = window.scrollY;
        var opacity = 1 - scrollPosition / 150;
        var opacity2 = 1 - scrollPosition / 100;

        opacity = Math.max(0, Math.min(1, opacity));

        opacity2 = Math.max(0, Math.min(1, opacity2));

        var titleElement = document.getElementById("title");
        if (titleElement !== null) {
            titleElement.style.opacity = opacity;
        }var titleElement = document.getElementById("subtitle");
        if (titleElement !== null) {
            titleElement.style.opacity = opacity2;
        }

     
        });

      function fadeHeaders() {
          var containers = document.querySelectorAll('.linksContainer');
          containers.forEach(function(container){
          var header = container.querySelector('.bottomLink');
         
          if (window.innerWidth < window.screen.width * 0.5 || window.innerWidth < 1200) {
                if (header != null){
                    header.style.opacity = '0';
              }
            } else {
                   if (header != null){
                    header.style.opacity = '1';
                   }
                
            }
          })
        }

      fadeHeaders();

      window.addEventListener('resize', function() {
          fadeHeaders();
      });

function titlize(clickedElement, id) {
  var fadeHeadersBefore = document.querySelectorAll(".menu-item");
 
  fadeHeadersBefore.forEach(function (menuItem) {
    
    menuItem.style.pointerEvents = "none"; 
    
  });

  switch(id) {
    case '1':
       
        body.style.height = "1000px"; 
        html.style.height = "1000px";
        break;
    case '2':
       
        body.style.height = "3000px"; 
        html.style.height = "3000px";
        break;
    case '3':
      
        body.style.height = "2300px"; 
        html.style.height = "2300px";
        break;
    case '4':
        
        body.style.height = "2300px"; 
        html.style.height = "2300px";
        break;
    case '5':
        
        body.style.height = "2000px"; 
        html.style.height = "2000px";
        break;
    default:
        console.log("Unknown link clicked");
        break;
}

  

}

document.addEventListener("DOMContentLoaded", function () {
  
  var fadeHeadersBefore = document.querySelectorAll(".menu-item");

  const fadeHeaders = [];

  for (let i = fadeHeadersBefore.length - 1; i >= 0; i--) {
    const valueAtIndex = fadeHeadersBefore[i];

    fadeHeaders.push(valueAtIndex);
  }
  
  function fadeInHeader(header, index) {
    setTimeout(function () {
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }, 150 * index); 
  }

 
  fadeHeaders.forEach(function (header, index) {
    fadeInHeader(header, index);
  });

  setTimeout(() => {
    fadeHeaders.forEach(function (header) {
     
      header.style.pointerEvents = "all"; 
    });
  }, 1700);
});

const myText = new SplitType("#name");

gsap.to(".char", {
  y: 0,
  ease: "expo.out",
  delay: 0.7,
  duration: 2.0,
});
const myText1 = new SplitType("#name1");
gsap.to(".char", {
  y: 0,
  ease: "expo.out",
  delay: 0.9,
  duration: 2.0,
});


const animationEnterMenu = (container) => {
  //console.log("animationEnterMenu");
  const timeline = gsap.timeline();

  var fadeHeadersBefore = document.querySelectorAll(".menu-item");

  const fadeHeaders = [];

  for (let i = fadeHeadersBefore.length - 1; i >= 0; i--) {
    const valueAtIndex = fadeHeadersBefore[i];
    fadeHeaders.push(valueAtIndex);
  }

  function fadeInHeader(header, index) {
    setTimeout(function () {
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }, 150 * index); 
  }

  fadeHeaders.forEach(function (header, index) {
    fadeInHeader(header, index);
  });
  setTimeout(() => {
  
    fadeHeaders.forEach(function (header) {     
      header.style.pointerEvents = "all"; 
    });
  }, 1700);


  timeline.to(container, {
    delay: 2,
    autoAlpha: 1,
    duration: 2,
    clearProps: "all",
    ease: "none",
  });

  return timeline;
};

const animationEnter = (container) => {
  const timeline = gsap.timeline();

  for (var index = 0; index < container.childNodes.length; index++) {
    console.log(index + " " + container.childNodes[index]);
  }

  timeline.from(container, {
    delay: 2,
    autoAlpha: 0,
    duration: 1,
    ease: "none",
  });
  return timeline;
};

const animationLeaveMenu = (data) => {
 

  
  const arrayOfDivs = [];

  arrayOfDivs.push(data.trigger);

  for (let i = 1; i < 10; i += 2) {
    var head =
      data.current.container.childNodes[1].childNodes[1].childNodes[1]
        .childNodes[i];


    if (data.trigger != head) {
      arrayOfDivs.push(head);
    }
  }

  arrayOfDivs.forEach(function (header) {
    
    header.style.pointerEvents = "none"; 
  });
  const timeline = gsap.timeline();

   timeline.to(data.current.container.childNodes[1].childNodes[1], {
    scale: 0.6,
    perspective: "none",
    rotateY: 0,
    duration: 0.4,
    ease: "power2.inOut",
  });

  timeline.to(arrayOfDivs, {
    autoAlpha: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "none",
  });

  data.current.container.childNodes[3].style.transition = "transform 0.5s ease-inout";
  data.current.container.childNodes[3].style.transform = `translateY(-55px)`;

  setTimeout(() => {
    data.current.container.childNodes[5].style.transition = "transform 0.5s ease-inout";
    data.current.container.childNodes[5].style.transform = `translateX(-60px)`;
    data.current.container.childNodes[7].style.transition = "transform 0.5s ease-inout"; 
    data.current.container.childNodes[7].style.transform = `translateX(-60px)`;
    data.current.container.childNodes[9].style.transition = "transform 0.5s ease-inout";
    data.current.container.childNodes[9].style.transform = `translateX(-60px)`;
  }, 50);
  

  timeline.to(data.current.container, {
    delay: 1,
    autoAlpha: 0,
    duration: 0.2,
    clearProps: "all",
    ease: "none",
  });

 
  return timeline;
};

const animationLeavePage = (data) => {
  body.style.height = "auto"; 
  html.style.height = "auto";
  
  const timeline = gsap.timeline();

  timeline.to(data.current.container, {
    delay: 0,
    autoAlpha: 0,
    duration: 0.4,
    clearProps: "all",
    ease: "none",
  });

  return timeline;
};

barba.init({
  transitions: [
    {
      sync: true,

      leave: (data) => animationLeaveMenu(data),
      enter: ({ next }) => {
     
        animationEnter(next.container);
        restartLenis();
        initScroll();
      },
    },
    {
      name: "back",
      priority: 1,
      custom: ({ trigger }) => {
       
   
        return trigger === "back";
        
      },

      leave: (data) => animationLeavePage(data),
      enter: ({ next }) => {
      

        animationEnterMenu(next.container);
      },
    },
    {
      name: "back2",
      priority: 1,
      custom: ({ trigger }) => {
        return trigger.classList && trigger.classList.contains('trans');
      },

      leave: (data) => animationLeavePage(data),
      enter: ({ next }) => {
      

        animationEnterMenu(next.container);
      },
    }
  ],
});



window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
