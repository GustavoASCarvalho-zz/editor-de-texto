const editor = document.getElementById("editor");
const btn = document.querySelectorAll("button");
const li = document.querySelectorAll(".dropdown-item");

const text = [];

editor.addEventListener("input", () => {
  editor.style.height = "auto";
  editor.style.height = editor.scrollHeight + "px";
});

btn.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(element);
    let cmd = element.dataset["comando"];
    if (cmd === "createLink") {
      let url = window.prompt("Enter the link here: ", "http://");
      document.execCommand(cmd, false, url);
    } else if (cmd === "insertImage") {
      console.log("insertImage");
      document.execCommand(cmd, false, "https://picsum.photos/200/300");
    } else {
      document.execCommand(cmd, false, null);
    }
  });
});

li.forEach((element) => {
  element.addEventListener("click", function () {
    document.execCommand("fontName", false, element.innerText);
    console.log(element.innerText);
  });
});
