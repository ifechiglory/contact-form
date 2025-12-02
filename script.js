document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    let isValid = true;

    if (!firstname) {
        showError('firstname', 'This field is required');
        isValid = false;
    }

    if (!lastname) {
        showError('lastname', 'This field is required');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            firstname,
            lastname
        }
        console.log('Form submitted successfully', formData);
    }
});

const showError = (fieldId, message) => {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(fieldId + "Error");
  field.classList.add("border-red-500");
  // take fieldId (firstname) go into index file and look for any element that has fieldId+'Error" (firstnameError)
  errorElement.innerText = message;
  errorElement.classList.remove("hidden");
};
