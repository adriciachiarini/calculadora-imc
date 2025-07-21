const calculateButton = document.querySelector('.button-calc')
const cleanButton = document.querySelector('.button-clean')
const imcResult = document.querySelector('.result')

function calculateIMC() {
    const peso = parseFloat(document.querySelector('.input-peso').value)
    const altura = parseFloat(document.querySelector('.input-altura').value) / 100
    const imc = peso / (altura * altura)
   
    
imcResult.innerHTML = 'Seu IMC é: ' + imc.toFixed(2)
   
}

const inputPeso = document.querySelector('.input-peso')
const inputAltura = document.querySelector('.input-altura')
 function limparCampos(){
    inputPeso.value =  ' '
    inputAltura.value = ' '
    imcResult.innerHTML = ' '
 }


cleanButton.addEventListener('click', limparCampos)
calculateButton.addEventListener('click', calculateIMC)