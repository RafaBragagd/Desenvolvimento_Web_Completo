//Coletando os elementos do DOM
const display   = document.getElementById("resultado")
const value1    = document.getElementById("value1")
const operador  = document.getElementById("operador")


let calculado = false
function calcular(tipo, valor){
    if(tipo === "acao"){
        switch(valor){
            case "/":
            case "*":
            case "+":
            case "-":
                if ((value1.textContent === "")&&(operador.textContent === "")){
                    value1.textContent  = display.value
                } else if(value1.textContent !==""){
                    value1.textContent = (value1.textContent + operador.textContent + display.value)
                }
                operador.textContent= valor
            case "c":
                display.value = ""
                break
            case ".":
                let display_valor = display.value
                if (!(display_valor.includes(".")) && (calculado !== true)){
                    display.value += valor
                }
                break
            case "=":
                const expressao = value1.textContent + operador.textContent + display.value
                value1.textContent = ""
                operador.textContent = ""
                display.value = eval(expressao)
                calculado = true
        }
    }else{
        if(calculado){
            display.value = ""
            calculado = false
        }
        display.value += valor
    }
}