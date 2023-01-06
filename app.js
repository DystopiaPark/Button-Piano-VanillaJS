const audio1 = new Audio("./notes/key08.mp3");
const audio2 = new Audio("./notes/key10.mp3");
const audio3 = new Audio("./notes/key12.mp3");
const audio4 = new Audio("./notes/key13.mp3");
const audio5 = new Audio("./notes/key15.mp3");
const audio6 = new Audio("./notes/key17.mp3");
const audio7 = new Audio("./notes/key19.mp3");
const audio8 = new Audio("./notes/key20.mp3");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("btn-c")) {
      audio1.play();
    } else if (styles.contains("btn-d")) {
      audio2.play();
    } else if (styles.contains("btn-e")) {
      audio3.play();
    } else if (styles.contains("btn-f")) {
      audio4.play();
    } else if (styles.contains("btn-g")) {
      audio5.play();
    } else if (styles.contains("btn-a")) {
      audio6.play();
    } else if (styles.contains("btn-h")) {
      audio7.play();
    } else if (styles.contains("btn-c2")) {
      audio8.play();
    }
  });
});

document.addEventListener("keydown", (event) => {
  const { key } = event;
  if (key === "a") {
    audio1.play();
  }
  if (key === "s") {
    audio2.play();
  }
  if (key === "d") {
    audio3.play();
  }
  if (key === "f") {
    audio4.play();
  }
  if (key === "g") {
    audio5.play();
  }
  if (key === "h") {
    audio6.play();
  }
  if (key === "j") {
    audio7.play();
  }
  if (key === "k") {
    audio8.play();
  }
});
