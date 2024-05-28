/* sidebar script */
document.querySelector('.menu-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-250px';
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar.contains(event.target) && !event.target.closest('.menu-button')) {
        closeSidebar();
    }
});

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

/* product page script */
function updatePrice(size) {
    if (size === "10") {
        document.getElementById("priceDisplay").innerText = "$45.99";
    } else if (size === "20") {
        document.getElementById("priceDisplay").innerText = "$75.99";
    }

    const containers = document.querySelectorAll('.size-circle-container');

    containers.forEach(container => {
        container.classList.remove('active');
    });

    const selectedContainer = document.querySelector(`input[name="size"][value="${size}"]`).parentNode;
    selectedContainer.classList.add('active');
}

document.querySelectorAll('input[name="size"]').forEach(radio => {
    radio.addEventListener('change', function() {
        updatePrice(this.value);
    });
});

function updatePrice2(size) {
    if (size === "15") {
        document.getElementById("priceDisplay").innerText = "$34.99";
    } else if (size === "20") {
        document.getElementById("priceDisplay").innerText = "$64.99";
    }

    const containers = document.querySelectorAll('.size-circle-container');

    containers.forEach(container => {
        container.classList.remove('active');
    });

    const selectedContainer = document.querySelector(`input[name="size"][value="${size}"]`).parentNode;
    selectedContainer.classList.add('active');
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

const button1 = document.querySelector(".addtocart");
const done1 = button1.querySelector(".done");

const button2 = document.querySelector(".addtocartmobile");
const done2 = button2.querySelector(".done");

console.log(button1, button2);

let added1 = false;
button1.addEventListener('click', () => {
    if (added1) {
        done1.style.transform = "translate(-110%) skew(-40deg)";
        added1 = false;
    } else {
        done1.style.transform = "translate(0px)";
        added1 = true;
    }
});

let added2 = false;
button2.addEventListener('click', () => {
    if (added2) {
        done2.style.transform = "translate(-110%) skew(-40deg)";
        added2 = false;
    } else {
        done2.style.transform = "translate(0px)";
        added2 = true;
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


function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.payment-button');
    let activeButton = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            button.classList.add('active');
            activeButton = button;
        });
    });
});

// Filter section: to enable 'Confirm Changes' button 
document.addEventListener('DOMContentLoaded', () => {
    const typeButtons = document.querySelectorAll('.type-button');
    const sizeButtons = document.querySelectorAll('.size-button');
    const brandSelect = document.querySelector('.brand-select');
    const confirmButton = document.querySelector('.confirm-button');

    let isFilterSelection = false;

    function enableConfirmButton() {
        confirmButton.disabled = false;
    }

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            isFilterSelection = true;
            enableConfirmButton();
        });
    });

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            isFilterSelection = true;
            enableConfirmButton();
        });
    });

    brandSelect.addEventListener('change', () => {
        isFilterSelection = true;
        enableConfirmButton();
    });
})





/* put any other js above this pls */
/* form validation */
