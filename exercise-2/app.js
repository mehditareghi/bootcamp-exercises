const textInput = document.getElementById("textInput");
const hint = document.getElementById("hint");

let typingTimer;
const doneTypingInterval = 500;

textInput.addEventListener("input", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

function doneTyping() {
  const inputValue = textInput.value;
  const inputLength = inputValue.length;

  hint.innerText = `طول رشته وارد شده: ${inputLength} کاراکتر`;

  if (inputLength > 30) {
    hint.classList.add("error");
    textInput.classList.add("error");
  } else {
    hint.classList.remove("error");
    textInput.classList.remove("error");
  }
}
