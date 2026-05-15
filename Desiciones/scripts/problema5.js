function calcular(){

    let nombre1 = document.getElementById("nombre1").value;
    let edad1 = Number(document.getElementById("edad1").value);

    let nombre2 = document.getElementById("nombre2").value;
    let edad2 = Number(document.getElementById("edad2").value);

    let nombre3 = document.getElementById("nombre3").value;
    let edad3 = Number(document.getElementById("edad3").value);

    let menor = nombre1;
    let edadMenor = edad1;

    if(edad2 < edadMenor){
        menor = nombre2;
        edadMenor = edad2;
    }

    if(edad3 < edadMenor){
        menor = nombre3;
        edadMenor = edad3;
    }

    document.getElementById("resultado").innerHTML =
    "La persona menor es " + menor + " con " + edadMenor + " años";

}