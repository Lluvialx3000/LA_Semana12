function calcular(){

    let horas = Number(document.getElementById("horas").value);
    let pago = Number(document.getElementById("pago").value);

    let sueldo;

    if(horas <= 40){
        sueldo = horas * pago;
    }else{

        let extras = horas - 40;

        sueldo = (40 * pago) + (extras * pago * 2);
    }

    document.getElementById("resultado").innerHTML =
    "Sueldo semanal: $" + sueldo;

}