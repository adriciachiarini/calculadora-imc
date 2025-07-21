const calculateButton = document.querySelector('.button-calc')
const cleanButton = document.querySelector('.button-clean')
const imcResult = document.querySelector('.result')
const inputPeso = document.querySelector('.input-peso')
const inputAltura = document.querySelector('.input-altura')


function calculateIMC() {
    const peso = parseFloat(inputPeso.value.replace(',', '.'))
    const altura = parseFloat(inputAltura.value.replace(',', '.'))
    
    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        imcResult.innerHTML = 'Preencha os campos corretamente.'
        return
    }

    const imc = peso / (altura * altura)
    imcResult.innerHTML = 'Seu IMC é: ' + imc.toFixed(2).replace('.', ',')
}


function limparCampos() {
    inputPeso.value = ''
    inputAltura.value = ''
    imcResult.innerHTML = ''
}

function formatarAltura(valor) {
    valor = valor.replace(/\D/g, '')
    if (valor.length >= 3) {
        return valor.replace(/^0+/, '').slice(0, -2) + '.' + valor.slice(-2)  // ← ponto aqui!
    } else if (valor.length === 2) {
        return '0.' + valor
    } else {
        return valor
    }
}

function formatarPeso(valor) {
    valor = valor.replace(/\D/g, '')
    if (valor.length >= 4) {
        return valor.replace(/^0+/, '').slice(0, -1) + ',' + valor.slice(-1)
    } else if (valor.length === 3) {
        return valor[0] + ',' + valor.slice(1)
    } else {
        return valor
    }
}


inputAltura.addEventListener('input', function () {
    this.value = formatarAltura(this.value)
})

inputPeso.addEventListener('input', function () {
    this.value = formatarPeso(this.value)
})

// Botões
cleanButton.addEventListener('click', limparCampos)
calculateButton.addEventListener('click', calculateIMC)
