function calcular(){

    let edad = Number(document.getElementById("edad").value);
    let promedio = Number(document.getElementById("promedio").value);

    let beca;

    if(edad > 18){

        if(promedio >= 9){
            beca = 2000;
        }else if(promedio >= 7.5){
            beca = 1000;
        }else if(promedio >= 6){
            beca = 500;
        }else{
            beca = "Carta de invitación";
        }

    }else{

        if(promedio >= 9){
            beca = 3000;
        }else if(promedio >= 8){
            beca = 2000;
        }else if(promedio >= 6){
            beca = 100;
        }else{
            beca = "Carta de invitación";
        }

    }

    document.getElementById("resultado").innerHTML =
    "Resultado: " + beca;

}