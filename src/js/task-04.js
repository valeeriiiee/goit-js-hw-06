let initialValue = 0;

let counterValue = document.getElementById("value")
counterValue.innerText = initialValue;

let incrementBtn = document.querySelector('[data-action="increment"]');
let decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
    initialValue++;
    counterValue.innerHTML = initialValue;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    initialValue--;
    counterValue.innerHTML = initialValue;
});