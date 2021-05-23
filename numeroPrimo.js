var numero = parseInt(process.argv[2]);
var aux = 0;

for(var i = 0; i <= numero; i++){
    if(numero % i === 0){
        console.log(i);
        aux++;
    }  
          
}

if(aux > 2){
    console.log('O número ' + numero + ' não é primo.');
}else{
    console.log('O número ' + numero + ' é primo.');
}
