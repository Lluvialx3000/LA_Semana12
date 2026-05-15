function calcular(){

    let antiguedad = Number(document.getElementById("antiguedad").value);

    let bono;

    if(antiguedad > 5){
        bono = 1000;
    }else{
        bono = antiguedad * 100;
    }

    document.getElementById("resultado").innerHTML =
    "Bono: $" + bono;

}