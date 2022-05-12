function logOut(){
    sessionStorage.removeItem("email");
    console.log("login success");
    location.href = "login.html";
    console.log("login return");

}