const pwd_length_input = document.getElementById('pwd_length');

document.getElementById('generate').addEventListener('click', function() {
    const length = parseFloat(pwd_length_input.value);
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('password').value = password;
});

document.getElementById('clipboard').addEventListener('click', function() {
    const password = document.getElementById('password');
    password.select();
    password.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(password.value);
    alert('Password copied to clipboard');
});