const editor = document.getElementById("editor");
const btn = document.querySelectorAll("button");
const li_font = document.querySelectorAll("#li-font");
const li_color = document.querySelectorAll("#li-color");

const text = [];

editor.addEventListener("input", () => {
  editor.style.height = "auto";
  editor.style.height = editor.scrollHeight + "px";
});

btn.forEach((element) => {
  element.addEventListener("click", function () {
    let cmd = element.dataset["comando"];
    if (cmd === "createLink") {
      let url = window.prompt("Enter the link here: ", "http://");
      document.execCommand(cmd, false, url);
    } else if (cmd === "insertImage") {
      document.execCommand(cmd, false, "https://picsum.photos/200/300");
    } else {
      document.execCommand(cmd, false, null);
    }
  });
});

li_font.forEach((element) => {
  element.addEventListener("click", function () {
    document.execCommand("fontName", false, element.innerText);
  });
});

li_color.forEach((element) => {
  element.addEventListener("click", function () {
    const rgb = rgb2hex(element.children[0].style.backgroundColor);
    document.execCommand("foreColor", false, rgb);
  });
});

function rgb2hex(rgb) {
  rgb = rgb.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );
  return rgb && rgb.length === 4
    ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : "";
}
