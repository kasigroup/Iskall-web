import anime from "animejs";

export function animContentIn() {
  anime({
    targets: ".contact-content",
    opacity: [0, 1],
    easing: "easeInOutQuart"
  });
}

export function animNavbar() {
  if (window.innerWidth >= 1100) {
    anime({
      targets: ".navbar a",
      color: "#FFF"
    });
  } else {
    anime({
      targets: ".navbar a",
      color: "#333"
    });
  }
}
