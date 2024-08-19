function handleMessage() {
  const message = document.getElementById("msg");
  const box = document.querySelector(".box");
  const existingMessage = document.querySelector(".hero");

  if (existingMessage) {
    existingMessage.remove();
  }

  if (message.value == "") {
    alert("Please Enter a message");
  } else {
    let Elm = document.createElement("p");
    Elm.innerHTML = message.value;
    Elm.classList.add("hero");

    box.appendChild(Elm);

    message.value = "";
  }
}
