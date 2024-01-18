function logToConsole(event) {
    //stop reloading
    event.preventDefault();
    console.log("Button clicked! Logging to console...");
}

document.getElementById('logButton').addEventListener('click', logToConsole);

// Additional code if needed

// Function to handle the Buy Now button click
function handleBuyNowClick(event) {
    // Check if the clicked element is a "Buy Now" button
    if (event.target.classList.contains('panda-btn-buy-now')) {
        // Find the closest card element and remove it
        var card = event.target.closest('.card');
        if (card) {
            card.remove();
            console.log('Card removed!');
        } else {
            console.warn('Card not found!');
        }
    }
}

// Add a click event listener to the parent element containing all "Buy Now" buttons
document.body.addEventListener('click', handleBuyNowClick);


// Function to check input and enable/disable the submit button
function checkInput() {
    var emailInput = document.getElementById('subscribeEmail');
    var submitButton = document.getElementById('submitButton');

    // Check if the input value contains the exact word 'Email'
    var isEmail = emailInput.value.toLowerCase().includes('email');

    // Enable/disable the submit button based on the condition
    submitButton.disabled = !isEmail;
}

// Add an event listener to the form to prevent default form submission
document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted!');
});

// Function to change the background color on double-click


// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color on double-click
function changeBackgroundColor() {
    var subscribeSection = document.getElementById('subscribeSection');
    
    // Set a random background color
    subscribeSection.style.backgroundColor = getRandomColor();
}





