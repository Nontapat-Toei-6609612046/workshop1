function submitLogin(event) {
    event.preventDefault();
    
   
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
    
    message.innerText = '';

   
    if (!username) {
        message.innerText = 'Please enter your username';
        return;
    }
    
    if (!password) {
        message.innerText = 'Please enter your password';
        return;
    }
    
   
    if (password.length < 13) {
        message.innerText = 'Password must be 13 characters long';
        return;
    }

    // หาก input ถูกต้อง ทำการส่งข้อมูลไปยัง API
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU55aa8b138006376c4dcb1ef750c1bdf761918dfb31f9fea51449474b7f1301294072158d1fa7d2a3f287fce0291651f2'
        },
        body: JSON.stringify({
            UserName: username, 
            PassWord: password
        })
    })
    .then(response => response.json())
    .then(data => {  
        if (data.displayname_th) {
            message.innerText = data.displayname_th;
        } else {
            message.innerText = 'Login failed. Please try again';
        }
    })
    .catch(error => {
        message.innerText = 'Error: ' + error.message;
        console.error('Error:', error);
    });
}
