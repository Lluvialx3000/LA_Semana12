function calcular(){

    let dinero = Number(document.getElementById("dinero").value);
    let costoKm = Number(document.getElementById("costoKm").value);

    let mexico = 750 * 2 * costoKm;
    let pv = 800 * 2 * costoKm;
    let acapulco = 1200 * 2 * costoKm;
    let cancun = 1800 * 2 * costoKm;

    let destino;

    if(dinero >= cancun){
        destino = "Cancún";
    }else if(dinero >= acapulco){
        destino = "Acapulco";
    }else if(dinero >= pv){
        destino = "Puerto Vallarta";
    }else if(dinero >= mexico){
        destino = "México";
    }else{
        destino = "Quedarse en casa";
    }

    document.getElementById("resultado").innerHTML =
    "Destino: " + destino;

}