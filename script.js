document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const message = document.getElementById("message").value;
  const consent = document.getElementById("consent").checked;

  let isValid = true;

  if (!firstname) {
    showError("firstname", "This field is required");
    isValid = false;
  }

  if (!lastname) {
    showError("lastname", "This field is required");
    isValid = false;
  }

  if (!email || !email.includes("@") || !email.includes(".")) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  if (!queryType) {
    const errorElement = document.getElementById("queryTypeError");
    errorElement.textContent = "Please select a query type";
    errorElement.classList.remove("hidden");
    isValid = false;
  }

  if (!message) {
    showError("message", "This field is required");
    isValid = false;
  }

  if (!consent) {
    const errorElement = document.getElementById("consentError");
    errorElement.textContent =
      "To submit this form, please consent to being contacted";
    errorElement.classList.remove("hidden");
    isValid = false;
  }

  if (isValid) {
    const formData = {
      firstname,
      lastname,
      email,
      queryType: queryType.value,
      message,
      consent,
    };

    console.log("Form submitted successfully", formData);
    alert("Thank you for filling out the form. We will contact you shortly");
    e.target.reset();
    clearErrors();
  }
});

const clearErrors = () => {
  const errorElements = document.querySelectorAll('[id$="Error"]');
  const fields = document.querySelectorAll("input, textarea");

  errorElements.forEach((element) => {
    element.textContent = "";
    element.classList.add("hidden");
  });

  fields.forEach((field) => {
    field.classList.remove("border-red-500");
    if (field.type !== "radio" && field.type !== "checkbox") {
      field.classList.add("border-green-500");
    }
  });
};

const showError = (fieldId, message) => {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(fieldId + "Error");
  field.classList.add("border-red-500");
  field.classList.remove("border-green-500");
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
};

document.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    if (field.classList.contains("border-red-500")) {
      field.classList.remove("border-red-500");
      field.classList.add("border-green-500");
      const errorElement = document.getElementById(`${field.Id}Error`);
      if (errorElement) {
        errorElement.textContent = " ";
        errorElement.classList.add("hidden");
      }
    }
  });
});

document.getElementById("consent").addEventListener("change", () => {
  const errorElement = document.getElementById("consentError");
  if (errorElement && document.getElementById("consent").checked) {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
  }
});
