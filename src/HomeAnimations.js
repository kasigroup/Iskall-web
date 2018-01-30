import anime from "animejs";

function writeOnMockup() {
  var elements = document.getElementsByClassName("mock-text");
  var elementsArray = Array.from(elements);
  var elStyles = elementsArray.map(item => {
    var style = window.getComputedStyle(item);
    return style.getPropertyValue("width");
  });
  var timeline = anime.timeline();
  timeline
    .add({
      targets: elements[1],
      opacity: [0, 1],
      width: ["0px", elStyles[1]],
      delay: 1000,
      easing: "easeOutExpo"
    })
    .add({
      targets: elements[2],
      opacity: [0, 1],
      width: ["0px", elStyles[2]],
      easing: "easeOutExpo"
    })
    .add({
      targets: elements[3],
      opacity: [0, 1],
      width: ["0px", elStyles[3]],
      easing: "easeOutExpo"
    })
    .add({
      targets: elements[4],
      opacity: [0, 1],
      width: ["0px", elStyles[4]],
      easing: "easeOutExpo"
    })
    .add({
      targets: elements[5],
      opacity: [0, 1],
      width: ["0px", elStyles[5]],
      easing: "easeOutExpo"
    })
    .add({
      targets: elements[6],
      opacity: [0, 1],
      width: ["0px", elStyles[6]],
      easing: "easeOutExpo"
    });
}

export function animNavbar() {
  anime({
    targets: ".navbar a",
    color: "#333"
  });
}

export function animMockupWebsite() {
  anime({
    targets: ".mockup-website",
    translateY: [-800, 0],
    opacity: [0, 1],
    easing: "easeInOutQuart"
  });

  writeOnMockup();
}
