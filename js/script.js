let result = document.querySelector('.result');
let calculating = document.querySelector('.calculating');
let splash = document.querySelector('.splash');
let button = document.getElementById('button-calc');
let pessoa1 = document.getElementById('pessoa1');
let pessoa2 = document.getElementById('pessoa2');

calculating.classList.toggle('hide');

button.addEventListener('click', () => {
    console.log('click');
    if (verifyInput()) {
        calculating.classList.toggle('hide');
        splash.style.display = 'none';
        let random = Math.floor(Math.random() * 100);
        setTimeout(() => {    
            result.innerHTML = `${random}%`;
            calculating.style.display = 'none';
            setTimeout(() => {
                window.location.reload();
            }, 5000)
        }, 3000);
        result.classList.toggle('hidde');
        button.disabled = true;
    } else {
        alert('É preciso preencher ambos os campos para fazer o cálculo...');
    }
});

function verifyInput() {
    console.log(pessoa1.value, pessoa2.value);
    if (pessoa1.value === '' || pessoa2.value === '') {
        return false;
    } 
    return true;
}


