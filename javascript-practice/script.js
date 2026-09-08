document.getElementById("btn").addEventListener("click", function verifyUser()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "Sree gowri" && password == "Karanam3@")
    {
        document.getElementById("message").innerText = "Login Successful!";
    }else{
        document.getElementById("message").innerText = "Login Failed";
    }
});