let numero = 0
basic.forever(function () {
    numero = 0
    if (numero > 0) {
        basic.showString("POSITIVO")
    }
    if (numero < 0) {
        basic.showString("NEGATIVO")
    }
    if (numero == 0) {
        basic.showString("NEUTRO")
    }
})
