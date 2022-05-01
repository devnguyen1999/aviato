if (sessionStorage.getItem("user") !== null) {
  $(".top-header .top-menu .login").empty();
  $(".top-header .top-menu .login").append(
    `<a href="profile-details.html"><i class="tf-ion-android-person"></i> MinhPhuong</a>`,
  );
}

const checkFirstName = () => {
  let valid = false;
  const firstName = $("#first-name").val().trim();

  if (firstName === "") {
    $("#first-name").addClass("input-error");
    $("#first-name + .text-error").text("First name cannot be blank.");
  } else {
    $("#first-name").removeClass("input-error");
    $("#first-name + .text-error").text("");
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let valid = false;
  const lastName = $("#last-name").val().trim();

  if (lastName === "") {
    $("#last-name").addClass("input-error");
    $("#last-name + .text-error").text("Last name cannot be blank.");
  } else {
    $("#last-name").removeClass("input-error");
    $("#last-name + .text-error").text("");
    valid = true;
  }
  return valid;
};

const checkUsername = () => {
  let valid = false;
  const username = $("#username").val().trim();

  if (username === "") {
    $("#username").addClass("input-error");
    $("#username + .text-error").text("Username cannot be blank.");
  } else {
    $("#username").removeClass("input-error");
    $("#username + .text-error").text("");
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const checkEmail = () => {
  let valid = false;
  const email = $("#email").val().trim();

  if (email === "") {
    $("#email").addClass("input-error");
    $("#email + .text-error").text("Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    $("#email").addClass("input-error");
    $("#email + .text-error").text("Email is not valid.");
  } else {
    $("#email").removeClass("input-error");
    $("#email + .text-error").text("");
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = $("#password").val().trim();

  if (password.length < 8) {
    $("#password").addClass("input-error");
    $("#password + .text-error").text(
      "Password must be at least 8 characters.",
    );
  } else {
    $("#password").removeClass("input-error");
    $("#password + .text-error").text("");
    valid = true;
  }
  return valid;
};

const checkConfirmPassword = () => {
  let valid = false;
  const password = $("#password").val().trim();
  const confirmPassword = $("#confirm-password").val().trim();

  if (confirmPassword === "") {
    $("#confirm-password").addClass("input-error");
    $("#confirm-password + .text-error").text(
      "Password must be at least 8 characters.",
    );
  } else if (password !== confirmPassword) {
    $("#confirm-password").addClass("input-error");
    $("#confirm-password + .text-error").text("Password does not match.");
  } else {
    $("#confirm-password").removeClass("input-error");
    $("#confirm-password + .text-error").text("");
    valid = true;
  }
  return valid;
};

$("#signin-form").submit(function (e) {
  e.preventDefault();
  let isFirstNameValid = checkFirstName();
  let isLastNameValid = checkLastName();
  let isUsernameValid = checkUsername();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();
  let isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  if (isFormValid) {
    e.submit();
  }
});

$("#login-form").submit(function (e) {
  e.preventDefault();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();

  let isFormValid = isEmailValid && isPasswordValid;

  if (isFormValid) {
    sessionStorage.setItem("user", "MinhPhuong");
    this.submit();
  }
});
