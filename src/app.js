/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const whoRandomIndex = Math.floor(Math.random() * who.length);
  const actionRandomIndex = Math.floor(Math.random() * action.length);
  const whatRandomIndex = Math.floor(Math.random() * what.length);
  const whenRandomIndex = Math.floor(Math.random() * when.length);

  const generatedSentence =
    $[who[whoRandomIndex]] +
    " " +
    action[actionRandomIndex] +
    " " +
    what[whatRandomIndex] +
    " " +
    when[whenRandomIndex];
  return generatedSentence;
}
