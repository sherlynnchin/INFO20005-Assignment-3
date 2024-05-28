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

document.querySelector('.addtocart').addEventListener('click', function() {
    changeCartButtonImage();
});

document.querySelector('.addtocartmobile').addEventListener('click', function() {
    changeCartButtonImage();
});

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
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var valid = true;

    var firstName = document.getElementById('firstName');
    if (firstName.value.trim() === '') {
        valid = false;
        document.getElementById('firstNameError').textContent = 'First Name is required.';
    }

    // Validate Last Name
    var lastName = document.getElementById('lastName');
    if (lastName.value.trim() === '') {
        valid = false;
        document.getElementById('lastNameError').textContent = 'Last Name is required.';
    }

    // Validate Phone Number
    var phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber.value.trim() === '') {
        valid = false;
        document.getElementById('phoneNumberError').textContent = 'Phone Number is required.';
    }

    // Validate Country
    var country = document.getElementById('country');
    if (country.value === '') {
        valid = false;
        document.getElementById('countryError').textContent = 'Country is required.';
    }

    // Validate Postal Code
    var postalCode = document.getElementById('postalCode');
    if (postalCode.value.trim() === '') {
        valid = false;
        document.getElementById('postalCodeError').textContent = 'Postal Code is required.';
    }

    // Validate Address Line 1
    var address1 = document.getElementById('address1');
    if (address1.value.trim() === '') {
        valid = false;
        document.getElementById('address1Error').textContent = 'Address Line 1 is required.';
    }

    // Validate State
    var state = document.getElementById('state');
    if (state.value === '') {
        valid = false;
        document.getElementById('stateError').textContent = 'State is required.';
    }

    // Validate City
    var city = document.getElementById('city');
    if (city.value.trim() === '') {
        valid = false;
        document.getElementById('cityError').textContent = 'City is required.';
    }

    if (valid) {
        // If form is valid, redirect to checkout2.html
        window.location.href = 'checkout2.html';
    }
});