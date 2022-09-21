let elements =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*-+.!@#$%&*";

const elements_length = elements.length;
const TEXTOUT = document.querySelector("#text-output");
const GENBTN = document.querySelector("#generatebtn");
const COPYBTN = document.querySelector("#copybtn");

GENBTN.addEventListener("click", () => {
    let output = "";
    TEXTOUT.textContent = "";
    for (let i = 0; i < 12; i++) {
        output += elements.charAt(Math.floor(Math.random() * elements_length));
    }
    TEXTOUT.textContent = output;
    TEXTOUT.setAttribute("value", output);
});

COPYBTN.addEventListener("click", () => {
    ///Copy btn, only works with input box and a value inside
    // Select the text field
    TEXTOUT.select();
    TEXTOUT.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field //Copy api
    navigator.clipboard.writeText(TEXTOUT.value);
    setTimeout(() => {
        TEXTOUT.textContent = "";
        TEXTOUT.removeAttribute("value");
    }, 2000);
});
