function updatePrice(size) {
    if (size === "10") {
        document.getElementById("priceDisplay").innerText = "$45.99";
    } else if (size === "20") {
        document.getElementById("priceDisplay").innerText = "$75.99";
    }
}

function increaseCount(element) {
    var input = element.parentNode.querySelector('input');
    var value = parseInt(input.value, 10);
    input.value = value + 1;
}

function decreaseCount(element) {
    var input = element.parentNode.querySelector('input');
    var value = parseInt(input.value, 10);
    if (value > 1) {
        input.value = value - 1;
    }
}

const button = document.querySelector(".addtocart");
const done = document.querySelector(".done");
console.log(button);
let added = false;
button.addEventListener('click',()=>{
  if(added){
    done.style.transform = "translate(-110%) skew(-40deg)";
    added = false;
  }
  else{
    done.style.transform = "translate(0px)";
    added = true;
  }
    
});

function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    var toggleButton = document.getElementById("toggleButton");

    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}