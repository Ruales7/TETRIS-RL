try {
throw "exceção";
}
catch (e){
console.log(e);
}
finally{
    console.log("finalizar ações pendentes");
}