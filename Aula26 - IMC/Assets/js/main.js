function enviar() {

    let p = document.getElementById('peso')
    let peso = Number(p.value)

    let a = document.getElementById('altura')
    let altura = Number(a.value)


    imc = peso/(altura * altura).toFixed(2)

    if (imc <= 18.5) {
        res.innerHTML = `IMC = ${(imc).toFixed(2)} &#x1F449 voce está abaixo do peso`
    } else if (imc > 18.5 && imc <=24.9 ){
        res.innerHTML = `IMC = ${(imc).toFixed(2)} &#x1F449 você esta no peso normal`
    } else if (imc >= 25 && imc <=29.9 ){
        res.innerHTML = `IMC = ${(imc).toFixed(2)} &#x1F449 você esta com Sobrepeso`
    } else if (imc > 30 && imc <=34.9 ){
        res.innerHTML = `IMC = ${(imc).toFixed(2)} &#x1F449 você tem obesidade grau I`
    }else if (imc > 35 && imc <=39.9 ){
         res.innerHTML = `IMC = ${(imc).toFixed(2)} &#x1F449 você tem obesidade grau II`
    } else if(imc > 40){
        res.innerHTML = `IMC = ${(imc).toFixed(2)} &#x1F449 você tem obesidade grau III`
    }
}
