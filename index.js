function caculation() {
    let fistNumber = Number(document.getElementById('number-first').value);
    let secondNumber = Number(document.getElementById('number-second').value);
    let caculation = document.getElementsByName('cal');
    for (let i = 0; i < caculation.length; i++) {
        if (caculation[i].checked) {
            switch (caculation[i].value) {
                case "add":
                    document.getElementById('result').value = fistNumber + secondNumber;
                    break;
                case "minus":
                    document.getElementById('result').value = fistNumber - secondNumber;
                    break;
                case "multiply":
                    document.getElementById('result').value = fistNumber * secondNumber;
                    break;
                case "divide":
                    document.getElementById('result').value = fistNumber / secondNumber;
                    break;
            }
        }
    }
}