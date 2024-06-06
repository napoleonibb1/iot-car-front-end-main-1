let adelante = document.getElementById("adelante");
let derecha = document.getElementById("derecha");
let detener = document.getElementById("detener");
let atras = document.getElementById("atras");
let izquierda = document.getElementById("izquierda");
let mensaje = document.getElementById("mensaje");

function callApi(estatus){

// Make a request for a user with a given ID
    axios.get('http:3.139.100.115//localhost/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
    .then(function (response) {
        // handle success
        console.log(response);
        mensaje.innerHTML="Respuesta: <strong>" + response.data +"</strong>";
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}
adelante.addEventListener("click", function (){
    callApi('a')
});
derecha.addEventListener("click", function () {
    callApi('b')
});
detener.addEventListener("click", function () {
    callApi('c')
});
atras.addEventListener("click", function () {
    callApi('d')
});
izquierda.addEventListener("click", function () {
    callApi('s')
});
/*
let adelante= document.getElementById('adelante');
function callApi(estatus){
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://localhost/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+ estatus)//url thunder
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
}

adelante.addEventListener("click", function (){
    callApi('w')
});
*/
