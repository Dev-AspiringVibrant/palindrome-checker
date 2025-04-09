document.getElementById("word").setAttribute("required", "required"); // Force user to enter a word.
const verify = document.getElementById("output");

function palindrome() {
    let typedWords = document.getElementById("word").value;
    let reversedTypedWords = reverseString(typedWords);

    if (typedWords === reversedTypedWords) {
        correct();
    }
    else {
        incorrect();
    }
} // Check if both typedWords and reverseWord are equal

function reverseString(reverseWord) {
    if (reverseWord === "") {
      return "";
    } else {
      return reverseString(reverseWord.substr(1)) + reverseWord.charAt(0);
    }
} // Reverse the word

function incorrect() {
    verify.src = "./images/false.jpg";
    verify.style.display = "block";
} // Shows incorrect image

function correct() {
    verify.src = "./images/true.jpg";
    verify.style.display = "block";
} // Shows correct image