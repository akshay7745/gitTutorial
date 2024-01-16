// Write your code below:
const fruits = document.getElementsByClassName("fruit");

for (let fruit of fruits) {
  fruit.style.fontWeight = "bold";
  if (fruit.textContent === "Orange") {
    fruit.style.backgroundColor = "yellow";
  }
}
