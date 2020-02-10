console.log('hello world');
const superForm = document.querySelector('#superForm');


superForm.addEventListener('submit', event => {

    const myText = document.querySelector('#myText');
    const textValue = myText.value;
    const error = document.querySelector('#error');

    if(!textValue){
        error.style.display = 'block';
        event.preventDefault();
    } else {
        const button = document.querySelector('#submitButton');
        button.textContent = 'Gesendet!';
        error.style.display = 'none';
    }
});