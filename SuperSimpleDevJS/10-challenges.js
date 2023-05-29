const testClass = document.querySelector('.js-button');
console.log(testClass.classList.contains('js-button'));

function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled')) {
        turnOfPreviousButton();
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}
function turnOfPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}