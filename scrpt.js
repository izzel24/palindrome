document.addEventListener('DOMContentLoaded', function() {
    let textInput = document.getElementById("text-input");
    let checkBtn = document.getElementById("check-btn");
    let result = document.getElementById("result");

    function isEmpty() {
        if (textInput.value.trim() === "") {
            return true;
        } else {
            return false;
        }
    }

    function palindrome() {
        let clearText = textInput.value.replace(/[^a-zA-Z0-9]/g, '');
        let lowercase = clearText.toLowerCase();
        var splittext = lowercase.split("");
        var reversetext = splittext.reverse();
        var join = reversetext.join("");

        if (lowercase === join) {
            result.innerHTML = textInput.value + " is a palindrome";
        } else {
            result.innerHTML = textInput.value + " is Not a palindrome";
        }
    }

    function check() {
        if (isEmpty()) {
            alert("Please input a value");
        } else {
            palindrome();
        }
    }

    checkBtn.addEventListener("click", check);
}); 