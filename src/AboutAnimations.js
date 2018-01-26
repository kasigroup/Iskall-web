import anime from "animejs";

export function animNavbar() {
  anime({
    targets: ".navbar a",
    color: "#FFF"
  });
}

export function animContentIn() {
  anime({
    targets: ".mockup-phone",
    translateX: [-800, 0],
    easing: "easeInOutQuart"
  });

  anime({
    targets: ".about-text",
    opacity: [0, 1],
    easing: "easeInOutQuart"
  });

  anime({
    targets: ".about-boxes",
    translateX: [800, 0],
    easing: "easeInOutQuart"
  });
}

export function animPhoneContent() {
  anime({
    targets: ".mockup-phone-blocks img",
    translateY: [-1000, 0],
    delay: function(el, i, l) {
      return i * 1000;
    }
  });
}
