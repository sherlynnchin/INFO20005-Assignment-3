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

function updatePrice3(size) {
    if (size === "15") {
        document.getElementById("priceDisplay").innerText = "$109.99";
    } else if (size === "30") {
        document.getElementById("priceDisplay").innerText = "$189.99";
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

// Adding slidebar to the add to cart button to indicate that item has been added to cart
document.addEventListener('DOMContentLoaded', () =>{
    const button1 = document.querySelector(".addtocart");
    let done1 = null;

    if (button1) {
        done1 = button1.querySelector(".done");
    }
    
    const button2 = document.querySelector(".addtocartmobile");
    let done2 = null;
    if (button2) {
        done2 = button2.querySelector(".done");
    }
    console.log(button1, button2);
    
    if (button1 && done1) {
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
    }
    
    if(button2 && done2) {
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
    }

})


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

//Validation Form for checkout1.html & checkout2.html
document.addEventListener('DOMContentLoaded', () => {
    //Validation Form for checkout1.html
    const proceedButton1 = document.getElementById('proceedButton1');
    const checkoutForm1 = document.getElementById('checkoutForm1');
    
    if (proceedButton1 && checkoutForm1) {
        proceedButton1.addEventListener('click', (event) => {
            console.log('Proceed button clicked');

            const firstName = document.getElementById('firstName');
            const lastName = document.getElementById('lastName');
            const phoneNumber = document.getElementById('phoneNumber');
            const country = document.getElementById('country');
            const postalCode = document.getElementById('postalCode');
            const address1 = document.getElementById('address1');
            const state = document.getElementById('state');
            const city = document.getElementById('city');
    
            let formIsValid = true;

            if (!firstName.value) {
                firstName.setCustomValidity("Please enter your first name.");
                formIsValid = false;
            } else {
                firstName.setCustomValidity("");
            }
    
            if (!lastName.value) {
                lastName.setCustomValidity("Please enter your last name.");
                formIsValid = false;
            } else {
                lastName.setCustomValidity("");
            }
    
            const phoneNumberPattern = /^\d*$/;
            if (!phoneNumber.value || !phoneNumberPattern.test(phoneNumber.value)) {
                phoneNumber.setCustomValidity("Please enter a valid phone number.");
                formIsValid = false;
            } else {
                phoneNumber.setCustomValidity("");
            }
    
            if (country.value === "placeholder") {
                country.setCustomValidity("Please select a country.");
                formIsValid = false;
            } else {
                country.setCustomValidity("");
            }

            if (state.value === "placeholder") {
                state.setCustomValidity("Please select a state.");
                formIsValid = false;
            } else {
                state.setCustomValidity("");
            }
    
            const postalCodePattern = /^[0-9]{4}$/;
            if (!postalCode.value || !postalCodePattern.test(postalCode.value)) {
                postalCode.setCustomValidity("Please enter a valid 4 digit postal code.");
                formIsValid = false;
            } else {
                postalCode.setCustomValidity("");
            }
    
            if (!address1.value) {
                address1.setCustomValidity("Please enter your address.");
                formIsValid = false;
            } else {
                address1.setCustomValidity("");
            }
    
            if (!city.value) {
                city.setCustomValidity("Please enter your city.");
                formIsValid = false;
            } else {
                city.setCustomValidity("");
            }

            if (!formIsValid) {
                checkoutForm1.reportValidity()
                event.preventDefault();
                event.stopPropagation();
                console.log('Form is invalid');
            } else {
                window.location.href = "checkout2.html";
                console.log('Form is valid');
            }
        });
    } 
    //Validation form for checkout2.html
    const proceedButton2 = document.getElementById('proceedButton2');
    const checkoutForm2 = document.getElementById ('checkoutForm2');

    if (proceedButton2 && checkoutForm2){
        proceedButton2.addEventListener('click', (event) => {
            console.log('Proceed button clicked');

            const addressSelector = document.querySelector('input[name="selector"]:checked');
            const cardName = document.getElementById('cardname');
            const cardNumber = document.getElementById('cardnum');
            const cardCCV = document.getElementById('cardccv');
            const expMonth = document.getElementById('cardexpmonth');
            const expYear = document.getElementById('cardexpyear');

            let formIsValid = true;

            if(!addressSelector) {
                const addressOptions = document.querySelectorAll('input[name="selector"]');
                addressOptions.forEach(option =>{
                    option.setCustomValidity("Please select if billing address is the same as the shipping address.");
                })
                formIsValid = false;
                
            } else {
                const addressOptions = document.querySelectorAll('input[name="selector"]');
                addressOptions.forEach(option =>{
                    option.setCustomValidity("");
                })
            }

            if(!cardName.value) {
                cardName.setCustomValidity("Please enter your name on the card.");
                formIsValid = false;
            } else {
                cardName.setCustomValidity("");
            }
            
            const cardNumberPattern = /^[0-9]{16}$/;
            if(!cardNumber.value || !cardNumberPattern.test(cardNumber.value)) {
                cardNumber.setCustomValidity("Please enter a valid 16-digit card number.");
                formIsValid = false;
            } else {
                cardNumber.setCustomValidity("");
            }

            const cardCCVPattern = /^[0-9]{4}$/;
            if(!cardCCV.value || !cardCCVPattern.test(cardCCV.value)) {
                cardCCV.setCustomValidity("Please enter a valid  4 digit card CCV.");
                formIsValid = false;
            } else {
                cardCCV.setCustomValidity("");
            }

            if(expMonth.value =="placeholder") {
                expMonth.setCustomValidity("Please select an expiration month.");
                formIsValid = false;
            } else {
                expMonth.setCustomValidity("");
            }

            if(expYear.value =="placeholder") {
                expYear.setCustomValidity("Please select an expiration year.");
                formIsValid = false;
            } else {
                expYear.setCustomValidity("");
            }

            if (!formIsValid){
                checkoutForm2.reportValidity()
                event.preventDefault();
                event.stopPropagation();
                console.log('Form is invalid');
            }else {
                window.location.href = "checkout3.html";
                console.log('Form is valid');
            }

        })


    }  

});




