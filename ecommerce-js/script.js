
document.getElementById("registerForm") 
.addEventListener("submit", function(event) { 
    event.preventDefault(); 
    console.log("Registration form submitted"); 
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let mobile =document.getElementById("mobile").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirm Password").value;
    console.log(username); 
    console.log(email); 
    console.log(mobile); 
    console.log(password); 
    console.log(confirmPassword); 
    if (username === "" || 
        email === "" || 
        mobile === "" || 
        password === "" || 
        confirmPassword === "") { 
        document.getElementById("message").innerText = "Please fill all fields"; 
        return; 
        }
        if (password.length < 6) { 
            document.getElementById("message") 
            .innerText = 
            "Password must contain at least 6 characters"; 
            return; 
        }
        if (password !== confirmPassword) { 
            document.getElementById("message") 
            .innerText = 
            "Passwords do not match"; 
            return; 
        }  
        let mobilePattern = /^[0-9]{10}$/; 
        if (!mobilePattern.test(mobile)) { 
            document.getElementById("message") 
            .innerText = "Enter a valid 10-digit mobile number"; 
            return; 
        } 
        let user = { 
            name: name, 
            email: email, 
            mobile: mobile, 
            password: password 
        }; 
        let userJSON = 
        JSON.stringify(user);
    });
