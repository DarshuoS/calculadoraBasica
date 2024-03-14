//Se encarga de liimpiar la paantalla de la calculadora

function limpiar (){
    document.getElementById('pantalla').value = '';

}

//Esta función se encarga de realizar las operaciones de cálculo

function calcular (){
    const valorOpercion = document.getElementById('pantalla').value
    const resultado = eval(valorOpercion)
    document.getElementById('pantalla').value = resultado;
}

//Esta agrega a la pantalla de la calculadora los números

function agregar (value){
    //if(!isNaN(value) || value == '.' )
        document.getElementById('pantalla').value += value;
    

}