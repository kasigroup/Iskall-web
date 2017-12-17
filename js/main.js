// on load animations

anime({
  targets: '#mock-website',
  translateY: [-800, 0],
  duration: 1200,
  elasticity: 700
});

// On click animations

function moveIt(){
  anime({
    targets: '#mock-website',
    translateX: 800,
    easing: 'easeInOutBack'
  });

  anime({
    targets: '.intro-right',
    translateX: 800,
    easing: 'easeInOutBack'
  }); 

  anime({
    targets: '.intro-left',
    translateX: -800,
    easing: 'easeInOutBack'
  }); 
};

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
