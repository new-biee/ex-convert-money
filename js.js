function convert() {
    let amount = +document.getElementById('amount').value;
    let money1 = document.getElementById('money1').value;
    let money2 = document.getElementById('money2').value;

    let result = amount * money1 / money2

    document.getElementById("result").innerHTML = "Result: " + result + " USD";
}
