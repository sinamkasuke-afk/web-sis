const role = localStorage.getItem("role");

if (role !== "admin") {
  window.location.href = "index.html";
}

function openLogout(){
  document.getElementById("logoutModal").style.display = "flex";
}

function closeLogout(){
  document.getElementById("logoutModal").style.display = "none";
}

function confirmLogout(){
  localStorage.removeItem("role");
  window.location.href = "index.html";
}

function logout(){
  openLogout();
}