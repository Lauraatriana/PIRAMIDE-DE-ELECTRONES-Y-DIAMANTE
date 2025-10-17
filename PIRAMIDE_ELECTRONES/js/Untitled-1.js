function op5() { 

    var niveles = 7;
    var subniveles = 4;
    var letra = ["", "s", "p", "d", "f"];
    var tabla = [];

    // crear tabla con los subniveles permitidos
    for (var n = 1; n <= niveles; n++) {
        tabla[n] = [];
        for (var c = 1; c <= subniveles; c++) {
            var permitido = 0;
            if (c == 1) {  // s existe siempre
                permitido = 1;
            } else {
                if (c == 2) {
                    if (n >= 2) {
                        permitido = 1;
                    }
                } else {
                    if (c == 3) {
                        if (n >= 3) {
                            permitido = 1;
                        }
                    } else {
                        if (c == 4) {
                            if (n >= 4) {
                                permitido = 1;
                            }
                        }
                    }
                }
            }

            if (permitido == 1) {
                tabla[n][c] = n + letra[c];
            } else {
                tabla[n][c] = "";
            }
        }
    }

    var limite = niveles + subniveles;
    for (var suma = 2; suma <= limite; suma++) {
        var fila = "";

        for (var n2 = niveles; n2 >= 1; n2--) {
            var c2 = suma - n2;

            if (c2 >= 1) {
                if (c2 <= subniveles) {
                    if (tabla[n2][c2] != "") {
                        if (fila == "") {
                            fila = tabla[n2][c2];
                        } else {
                            fila = fila + "  " + tabla[n2][c2];
                        }
                    }
                }
            }
        }

        if (fila != "") {
            console.log(fila);
        }
    }
}