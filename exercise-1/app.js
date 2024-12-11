const textInput = document.getElementById("textInput");

let typingTimer;
const doneTypingInterval = 500;

textInput.addEventListener("input", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

function doneTyping() {
  const inputValue = textInput.value;
  const inputLength = inputValue.length;
  alert(`مقدار وارد شده: ${inputValue}\nطول رشته: ${inputLength} کاراکتر`);
}
