document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
      alert("유효한 이메일 주소를 입력하세요.");
      return;
    }

    if (password.length < 5) {
      alert("비밀번호는 5자 이상이어야 합니다.");
      return;
    }
  });
});
