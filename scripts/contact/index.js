const clearErrors = () => {
  document.querySelectorAll(".error").forEach(error => (error.textContent = ""));
};

const validateField = (fieldId, errorId, value, regex, emptyError, invalidError) => {
  const fieldValue = value.trim();
  if (!fieldValue) {
    document.getElementById(errorId).textContent = emptyError;
    return true;
  } else if (!regex.test(fieldValue)) {
    document.getElementById(errorId).textContent = invalidError;
    return true;
  }
  return false;
};

const validateFirstName = () => {
  return validateField(
    "firstName",
    "firstNameError",
    document.getElementById("firstName").value,
    /^[A-Za-zА-Яа-я'-]{3,}$/,
    "First Name is required!",
    "First Name must contain only letters, apostrophes, or dashes and be at least 3 characters long."
  );
};

const validateLastName = () => {
  return validateField(
    "lastName",
    "lastNameError",
    document.getElementById("lastName").value,
    /^[A-Za-zА-Яа-я'-]{3,}$/,
    "Last Name is required!",
    "Last Name must contain only letters, apostrophes, or dashes and be at least 3 characters long."
  );
};

const validateEmail = () => {
  return validateField(
    "email",
    "emailError",
    document.getElementById("email").value,
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Email is required!",
    "Invalid email format. Please provide a valid email address."
  );
};

const validatePhone = () => {
  return validateField(
    "phone",
    "phoneError",
    document.getElementById("phone").value,
    /^(?:\+380\d{9}|0\d{9})$/,
    "Phone number is required!",
    "Invalid phone format. Use +380XXXXXXXXX or 0XXXXXXXXX."
  );
};

const validateMessage = () => {
  return validateField(
    "comment",
    "commentError",
    document.getElementById("comment").value,
    /.+/,
    "Message is required!",
    ""
  );
};

document.querySelector(".submit-btn").addEventListener("click", e => {
  e.preventDefault();

  clearErrors();

  const hasErrors = [
    validateFirstName(),
    validateLastName(),
    validateEmail(),
    validatePhone(),
    validateMessage()
  ].some(error => error);

  if (!hasErrors) {
    clearErrors();
    alert("Form successfully submitted!");
  }
});
