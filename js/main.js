// vars

// onLoad
// Set has to nothing
location.hash = ""

// on load animations


anime({
  targets: '#mock-website',
  translateY: [-800, 0],
  duration: 800,
  elasticity: 500
});

// On click animations
function funcRef() {
  // Get location
  var url = decodeURI(window.location.hash);
  var temp = url.split('/')[0];
  console.log(temp);
}

window.onhashchange = funcRef;

function moveIt(){

  function changePage(){
    var wrapperOut = document.getElementById("wrap-start");
    var wrapperIn = document.getElementById("wrap-about");
  
    
    wrapperIn.classList.add("current");
    wrapperOut.classList.add("notCurrent");

    anime({
      targets: '#wrap-about',
      opacity: [0,1],
      easing: 'easeInOutBack'
    });

    anime({
      targets: '.navbar a',
      color: "#fff",
      easing: 'easeInOutBack'
    });

  }

  anime({
    targets: '#mock-website',
    translateX: 800,
    easing: 'easeInOutBack'
  });

  anime({
    targets: '.intro-right',
    translateX: 800,
    easing: 'easeInOutQuad'
  }); 

  var lastPromise = anime({
    targets: '.intro-left',
    translateX: -800,
    easing: 'easeInOutBack'
  }); 

  var promise = lastPromise.finished.then(changePage);
};

function writeOnMockup(){
  var elements = document.getElementsByClassName('mock-text');
  var elementsArray = Array.from(elements);
  var elStyles = elementsArray.map(item => {
    var style = window.getComputedStyle(item);
    return style.getPropertyValue('width');
  });
  var timeline = anime.timeline();
  timeline
    .add({
      targets: elements[1],
      opacity: [0, 1],
      width: ["0px", elStyles[1]],
      delay: 1000,
      easing: 'easeOutExpo'
    })
    .add({
      targets: elements[2],
      opacity: [0, 1],
      width: ["0px", elStyles[2]],
      easing: 'easeOutExpo'
    })
    .add({
      targets: elements[3],
      opacity: [0, 1],
      width: ["0px", elStyles[3]],
      easing: 'easeOutExpo'
    })
    .add({
      targets: elements[4],
      opacity: [0, 1],
      width: ["0px", elStyles[4]],
      easing: 'easeOutExpo'
    })
    .add({
      targets: elements[5],
      opacity: [0, 1],
      width: ["0px", elStyles[5]],
      easing: 'easeOutExpo'
    })
    .add({
      targets: elements[6],
      opacity: [0, 1],
      width: ["0px", elStyles[6]],
      easing: 'easeOutExpo'
    });
}

writeOnMockup();


// Snow

// window.onload = function () {
//   var canvas = document.getElementById("sky");
//   var ctx = canvas.getContext("2d");

//   var W = sky.offsetWidth;
//   var H = sky.offsetHeight;
//   canvas.width = W;
//   canvas.height = H;

//   var mf = 100;
//   var flakes = [];

//   for (var i = 0; i < mf; i++)
//   {
//     flakes.push({
//       x: Math.random()*W,
//       y: Math.random()*H,
//       r: Math.random()*5+2,
//       d: Math.random() + 1
//     })
//   }

//   function drawFlakes(){
//     ctx.clearRect(0, 0, W, H);
//     ctx.fillStyle = "white";
//     ctx.beginPath();
//     for(var i = 0; i < mf; i++)
//     {
//       var f = flakes [i];
//       ctx.moveTo(f.x, f.y);
//       ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
//     }
//     ctx.fill();
//     moveFlakes();
//   }
//   var angle = 0;

//   function moveFlakes(){
//     angle += 0,01;
//     for(var i = 0; i < mf; i++)
//     {
//       var f = flakes[i];

//       f.y += Math.pow(f.d, 2) + 1;
//       f.x += Math.sin(angle) * 2;

//       if(f.y > H) {
//         flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d:f.d};
//       }
//     }
//   }
//   setInterval(drawFlakes, 25);

// }
