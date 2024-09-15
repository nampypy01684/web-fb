
let previousPage = "";
function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var previousPage = document.referrer;
  if (previousPage.includes("signup.html")) {
    previousPage = "index.html"; // Hoặc chuyển đến trang mặc định khác
  }
    var userJSON = localStorage.getItem(username);
    if (userJSON) {
      var user = JSON.parse(userJSON);
      if (email === user.email && password === user.password) {
        alert("Đăng nhập thành công");
        window.location.href = previousPage;
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
      }
    } else {
      alert("Tài khoản chưa được đăng ký");
    }
  }
  