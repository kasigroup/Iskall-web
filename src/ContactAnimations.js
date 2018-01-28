import anime from "animejs";

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
