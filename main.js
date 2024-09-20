const buttonClick = document.querySelector(".buttons");
let toastBox = document.getElementById("toastBox");
let successMsg = "Successfully submitted";
let errorMsg = "Something went wrong";
let invalidMsg = "Sumbit valid details";

function showToast(message, color) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.style.backgroundColor = color;

  let messageContainer = document.createElement("div");
  messageContainer.classList.add("message");
  messageContainer.innerHTML = message;

  let closeBtn = document.createElement("span");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "<i class='fa-solid fa-xmark' ></i>";

  toast.appendChild(messageContainer);
  toast.appendChild(closeBtn);
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);

  closeBtn.addEventListener("click", () => {
    toast.remove();
  });
}

buttonClick.addEventListener("click", (event) => {
  if (event.target.id === "successBtn") {
    showToast(successMsg, "green");
  } else if (event.target.id === "errorBtn") {
    showToast(errorMsg, "red");
  } else if (event.target.id === "invalidBtn") {
    showToast(invalidMsg, "orange");
  }
});
