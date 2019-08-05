function setOutput(value) {
    let Value = document.getElementById('output').value += value;

}

function result() {
    let result = document.getElementById('output').value;
    document.getElementById('output').value = eval(result);

}

function clearoutput() {
    document.getElementById('output').value = "";


}
function del() {
    let  del = document.getElementById('output').value;
    document.getElementById('output').value = del.substring(0, del.length -1);

}
function result1() {
    let result1 = document.getElementById('output').value;
    document.getElementById('output').value = eval(result1)/100;
}