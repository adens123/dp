const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".createBtn");
// let notes = document.querySelectorAll(".inputBox");

const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};

showNotes();

const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputBox";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    // const notes = document.querySelectorAll(".inputBox");
    // notes.forEach(item => {
    //   // item.addEventListener("keyup", updateStorage);
    //   item.onkeyup = updateStorage;
    // });
    e.target.onkeyup = updateStorage;
  }
});

document.addEventListener("keydown", e => {
  if (e.key == "Enter") {
    e.preventDefault();
    document.execCommand("insertLineBreak");

    // e.preventDefault();
    // const br = document.createElement("br");
    // const selection = window.getSelection();
    // console.log(selection.toString());
    // console.log(selection.getRangeAt(0));

    // if (selection.rangeCount > 0) {
    //   const range = selection.getRangeAt(0);
    //   range.deleteContents();
    //   range.insertNode(br);
    //   range.collapse(false);
    //   selection.removeAllRanges();
    //   selection.addRange(range);
    // }
  }
});
