function caculation() {
    let fistNumber = document.getElementById('number-first').value;
    let secondNumber = document.getElementById('number-second').value;
    let caculation = document.getElementsByName('cal').value;
    if (caculation == 'add') {
        document.getElementsByName('result').value = fistNumber + secondNumber;
    }
    if (caculation == 'minus') {
        document.getElementsByName('result').value = fistNumber - secondNumber;
    }
    if (caculation == 'multiply') {
        document.getElementsByName('result').value = fistNumber * secondNumber;
    }
    if (caculation == 'divide') {
        document.getElementsByName('result').value = fistNumber / secondNumber;
    }
}