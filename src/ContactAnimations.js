import anime from "animejs";

export function animContentIn() {
  anime({
    targets: ".contact-content",
    opacity: [0, 1],
    easing: "easeInOutQuart"
  });
}

export function animNavbar() {
  if (window.innerWidth >= 992) {
    anime({
      targets: ".navbar a",
      color: "#FFF"
    });
  } else {
    anime({
      targets: ".navbar a",
      color: "#333",
      borderColor: "#f68889"
    });
  }
}
