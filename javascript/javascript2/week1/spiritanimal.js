const animalNames = ["Bear - It is deeply emotional", "Cat - symbolizes curiosity", 
"Deer - balance between confidence and success", "Elephant - symbolizes wisdom",
    "Horse - the guide of passion and drive", "Lion - represents heart and courage",
    "Peacock-  represents resurrection and reinvention", 
    "Tiger - represents raw feelings and emotions", "Butterfly - symbol of transformation"];
const spiritAnimal = document.querySelector('.spiritAnimal');
const button = document.querySelector(".submit");
//button.innerHTML = "submit";
function generateSpiritName() {
    const name = document.getElementsByClassName("name")[0].value;
    if (name) {
        spiritAnimal.innerHTML = `${name} : ${animalNames[Math.floor(Math.random() * animalNames.length)]}`;
    }
    else {
        alert("please write your name")
    }
}
button.addEventListener("click", generateSpiritName);
