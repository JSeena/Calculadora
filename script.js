function insertNum(num) {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clearCalc() {
    document.getElementById('result').innerHTML = "";
}

function removeLast() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calcNum() {
    var result = document.getElementById('result').innerHTML;

    if (result) {
        document.getElementById('result').innerHTML = eval(result);
    }
}