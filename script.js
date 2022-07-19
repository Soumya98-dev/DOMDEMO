function surprise() {
  document.querySelector("button").disabled = false;
  let animals = [
    "Dog",
    "Cat",
    "Warthog",
    "Eagle",
    "Elephant",
    "Giraffe",
    "Lion",
  ];
  let ul = document.querySelector("ul");
  for (let i = 0; i < animals.length; i++) {
    let liTags = document.createElement("li");
    liTags.textContent = animals[i];
    ul.appendChild(liTags);
  }
  document.querySelector("button").disabled = true;
}
function reLoad() {
  document.location.reload(true);
}