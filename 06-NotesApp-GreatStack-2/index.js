const createBtn = document.querySelector(".createBtn");
const notesContainer = document.querySelector(".notesContainer");

const init = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};

init();

const createNote = () => {
  createBtn.addEventListener("click", () => {
    const note = document.createElement("p");
    note.className = "note";
    note.setAttribute("contenteditable", "true");
    const img = document.createElement("img");
    img.src = "./images/delete.png";
    notesContainer.appendChild(note).appendChild(img);
  });
};

createNote();

const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

notesContainer.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    e.target.onkeyup = updateStorage;
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.execCommand("insertLineBreak");
  }
});
