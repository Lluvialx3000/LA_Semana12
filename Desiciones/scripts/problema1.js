function calcular(){

    let edad =
    Number(
        document.getElementById("edad").value
    );

    let resultado =
    document.getElementById("resultado");

    if(edad >= 18){

        resultado.innerHTML =
        "✅ Puede votar";

    }else{

        resultado.innerHTML =
        "❌ No puede votar";

    }

}