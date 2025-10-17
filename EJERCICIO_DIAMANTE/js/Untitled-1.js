function ope(){
console.log ("hola mundo");
var a = Number (prompt('numero1'));
var b = prompt('numero2');
b=parseInt(b);

console.log (a+b)
console.log (a-b)
console.log (a*b)
console.log (a/b)
}

/*let numero= Number (prompt('Ingrese un número para saber si es par o impar'));
if (numero%2 == 0){
    alert('es par');
}
else{
    alert ('es impar');
}*/
var nom ="";
var edad = 0;
function op1(){
    nom=document.getElementById("nombre").value;
    edad=document.getElementById("nombre").value;
    console.log("Nombre:" + nom)
    console.log("Edad:" + edad)

if (edad > 18 ){
    console.log ("Es mayor por:" + (edad - 18) + "años")
}
else{
    console.log ("Es menor por:" + (18) - edad + "años")
}

}

function op2(){
    num=document.getElementById("numer").value;
    tabla=document.getElementById("tabla").value;
    
    for(i=0; i<=tabla; i++){
        console.log (num + "*" + i + ":" + num*i)
    }
}

var matrix = [];
function op3(){
    X=document.getElementById("NX").value;
    Y=document.getElementById("NY").value;

    for(i=0; i <= X; i++){
        matrix[i]=[];
        for(j=0; j <= Y; j++){
            if ((i+j)%2 == 0){
                matrix [i][j] = 0;
            }
            else{
                matrix [i][j] = 1;
            }
        }
    }
    console.log (matrix)
}

function op4() {
    var mx = document.getElementById("mx").value;
    var my = document.getElementById("my").value;

    if (mx == "") {
        mx = "*";
    }

    if (my == "" || my <= 0) {
        console.log("Ingrese un número mayor a 0 e impar");
    } else {
        // Solo funciona correctamente con número impar
        if (my % 2 != 0) {

            var h = (my + 1) / 2;

            for (var i = h; i >= 1; i--) {
                var espacios = "";
                var simbolos = "";

                for (var j = i; j < h; j++) {
                    espacios += " ";
                }
                
                for (var j = 1; j <= (2 * i - 1); j++) {
                    simbolos += mx;
                }

                console.log(espacios + simbolos);
            }

        } else {
            console.log("El número ingresado debe ser impar.");
        }
    }
}

