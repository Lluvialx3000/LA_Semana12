function calcular(){

    let tipo = document.getElementById("tipo").value;
    let alcohol = document.getElementById("alcohol").checked;
    let lentes = document.getElementById("lentes").checked;
    let enfermedad = document.getElementById("enfermedad").checked;
    let edad = Number(document.getElementById("edad").value);

    let base;

    if(tipo == "A"){
        base = 1200;
    }else{
        base = 950;
    }

    let total = base;

    if(alcohol){
        total += base * 0.10;
    }

    if(lentes){
        total += base * 0.05;
    }

    if(enfermedad){
        total += base * 0.05;
    }

    if(edad > 40){
        total += base * 0.20;
    }else{
        total += base * 0.10;
    }

    document.getElementById("resultado").innerHTML =
    "Costo de póliza: $" + total;

}