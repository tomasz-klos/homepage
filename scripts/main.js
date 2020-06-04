alert('Witam szanownych obserwatorów');

const firstName = "Tomasz";
const age = 22

const emptymain = document.querySelector('.frontend-road--js');

emptymain.innerHTML = 'Witam i o zdrowie pytam';


function calculate(myNumber) {
    console.log(`Dostałem ${myNumber}`);
    myNumber = myNumber * 10;
    return `Wynik ${myNumber}`;
}

const myResult = calculate(3);

console.log(myResult);

function greet(firstName, age) {
    console.log(
        `Witam ciekawskich, nazywam się ${firstName} i mam ${age} lata`
    )
}

greet(firstName, age);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('.navigation--open');
})
