const eye = document.querySelector('.feather-eye');
const eyeoff = document.querySelector('.feather-eye-off');
const passwordField = document.querySelector('input[type=]'); 

eye.addEventListener('click , () => {
    eye.computedStyleMap.display = "none" ; 
    eyeoff.computedStyleMap.display = "block"
    passwordField.type = "text" ; 
})