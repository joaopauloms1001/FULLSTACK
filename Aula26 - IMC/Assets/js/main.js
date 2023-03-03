function enviar() {

    let p = document.getElementById('peso')
    let peso = Number(p.value)

    let a = document.getElementById('altura')
    let altura = Number(a.value)


    imc = peso/(altura * altura)

    if (imc < 500) {
        res.innerHTML = `IMC = ${imc}, putzz`
    } else if (imc>500){
        res.innerHTML = `IMC = ${imc}, putzz`
    }

}
