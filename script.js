function sumValues() 
{
    var N1 = parseFloat(document.getElementById('N1').value);
    var N2 = parseFloat(document.getElementById('N2').value);
    var oper = document.getElementById('operators').value;
    
    if(oper === "+") {
        var calculate = N1 + N2;}
    else if(oper === "-") {
        calculate = N1 - N2;}
    else if(oper === "/") {
        calculate = N1 / N2;}
    else if(oper === "*") {
        calculate = N1 * N2;
    }
    
    document.getElementById("result").innerHTML = calculate;
}