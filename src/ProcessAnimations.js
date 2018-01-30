import anime from "animejs";

export function animContentIn() {
  anime({
    targets: ".process-left",
    opacity: [0, 1],
    easing: "easeInOutQuart"
  });
}

export function animNavbar() {
  anime({
    targets: ".navbar a",
    color: "#333"
  });
}
