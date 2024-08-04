document.addEventListener('DOMContentLoaded', () => {
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');

    // Check if the form exists
    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Send form data to the server
            try {
                const response = await fetch('/save-form-data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formObject),
                });

                if (response.ok) {
                    // Display a pop-up message
                    alert('Thank you for your message! You will be redirected to the home page.');

                    // Redirect after a short delay
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 2000); // 2 seconds delay
                } else {
                    alert('There was an issue saving your data.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an issue saving your data.');
            }
        });
    }

    // Existing code for the button
    const myButton = document.getElementById('about');

    if (myButton) {
        myButton.addEventListener('click', () => {
            window.location.href = 'about.html';
            // alert('TBU');
        });
    }
});

// To retrieve the saved data later
const savedData = localStorage.getItem('contactFormData');
if (savedData) {
    const formObject = JSON.parse(savedData);
    console.log(formObject);
}
