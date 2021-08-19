const textarea = document.querySelector("textarea");
const li = document.querySelectorAll("li");

console.log(li);

const text = [];

textarea.addEventListener("input", function () {
  textarea.style.height = textarea.scrollHeight + "px";
});

li.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(textarea.value);
    if (getSelectText() !== "" || getSelectText() !== " ") {
      const textBold = getSelectText();
      textBold.style.fontWeight = "bold";
      textarea.value =
        textarea.value.substring(0, textarea.selectionStart) +
        `${getSelectText()}` +
        textarea.value.substring(textarea.selectionEnd);
    }
  });
});

getSelectText = () => {
  var start = textarea.selectionStart;
  var finish = textarea.selectionEnd;
  return textarea.value.substring(start, finish);
};
