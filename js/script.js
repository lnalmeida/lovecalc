let result = document.querySelector('.result');
let calculating = document.querySelector('.calculating');
let splash = document.querySelector('.splash');
let button = document.getElementById('button-calc');
let pessoa1 = document.querySelector('.pessoa1').value;
let pessoa2 = document.querySelector('.pessoa2').value;

calculating.classList.toggle('hide');

button.addEventListener('click', () => {
    console.log('click');
    calculating.classList.toggle('hide');
    // verifyInput();
    splash.style.display = 'none';
    let random = Math.floor(Math.random() * 100);
    setTimeout(() => {    
        result.innerHTML = `${random}%`;
        calculating.style.display = 'none';
        setTimeout(() => {
            window.location.reload();
        }, 3000)
    }, 3000);
    result.classList.toggle('hidde');
    button.disabled = true;

});

function verifyInput() {
    if (pessoa1 === '') {
        alert('Введите имя первого участника');
    } else if (pessoa2 === '') {
        alert('Введите имя второго участника');
    }
}


