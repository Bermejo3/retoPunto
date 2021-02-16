import { Punto } from "./clasePunto";
import { Triangulo } from "./claseTriangulo"

let punto1: Punto = new Punto(3,9)

punto1.toString()
console.log(punto1.getX())
punto1.setX(4)
console.log(punto1.getX())
console.log(punto1.getY());
punto1.setY(1)
console.log(punto1.getY());
punto1.toString()

let punto2: Punto = new Punto(-1,1)
console.log(punto2.distanciaAlOrigen())

let punto3: Punto = new Punto(-4,-10)
console.log(punto2.calcularDistancia(punto3));

let punto4: Punto = new Punto(3, -1)
let punto0: Punto = new Punto(0,0)
console.log(punto0.calcularCuadrante())
console.log(punto1.calcularCuadrante())
console.log(punto2.calcularCuadrante())
console.log(punto3.calcularCuadrante())
console.log(punto4.calcularCuadrante())

console.log(punto0.calcularMasCercano([punto1,punto2,punto3,punto4]));

let v1: Punto = new Punto(0,0)
let v2: Punto = new Punto(3,0)
let v3: Punto = new Punto(0,4)

let triangle: Triangulo = new Triangulo(v1,v2,v3)

console.log(triangle.calcularLongitudLados());
