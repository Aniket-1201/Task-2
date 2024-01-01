function appendtoresult(value) {
    document.getElementById('input').value += value;
}
function clearResult() {
    document.getElementById('input').value = '';
}

function calculateresult() {
    try {
        document.getElementById('input').value = eval(document.getElementById('input').value);
    } catch (error) {
        document.getElementById('input').value = 'Error';
    }
}

function backspace() {
    var currentValue = document.getElementById('input').value;
    document.getElementById('input').value = currentValue.slice(0, -1);
}

function power() {
    appendtoresult('**');
}

function percentage() {
    var currentValue = document.getElementById('input').value;
    var result = eval(currentValue) / 100;
    document.getElementById('input').value = result;
}