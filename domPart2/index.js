// Write your code below:
const fruitCollection = document.getElementsByTagName("li");

for (let fruit of fruitCollection) {
  fruit.style.fontStyle = "italic";
  if (fruit.textContent === "Mango") {
    fruit.style.color = "blue";
  }
}
