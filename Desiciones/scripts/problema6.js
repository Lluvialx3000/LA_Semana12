function calcular(){

    let precio = Number(document.getElementById("precio").value);

    let descuento;

    if(precio >= 200){
        descuento = 0.15;
    }else if(precio > 100){
        descuento = 0.12;
    }else{
        descuento = 0.10;
    }

    let total = precio - (precio * descuento);

    document.getElementById("resultado").innerHTML =
    "Precio final: $" + total;

}