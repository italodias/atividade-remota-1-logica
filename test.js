var listadepecas = ["motor", "vela", "amortecedor"]

if (listadepecas.length<10){
    console.log ("Ainda há espaços")
} else{
    console.log ("Não há espaços")
}

let peso = 120

if (peso < 100){
    console.log("peso minímo da peça tem que ser 100g")
}else{
    console.log("peso permitido")
}

let peca = "escapamento"

if(peca.length>3){
    console.log("nome válido")
}else if (peca.length == 0){
    console.log("Nome vazio, digite um nome válido")
}else{
    console.log("minimo de 3 caracteres no nome")
}

switch(peca.length){
    case 0:
        console.log("Nome vazio, digite um nome válido")
        break;
    case 1:
    case 2:
    case 3:
        console.log("o número minimo de caracteres é 3")
        break;
    default:
        console.log("nome válido")
        break;
}