import { Punto } from "./clasePunto";

export class Triangulo{
    //Atributos
    private vertice1: Punto
    private vertice2: Punto
    private vertice3: Punto

    //Constructor
    constructor (vertice1: Punto, vertice2: Punto, vertice3: Punto){
        this.vertice1 = vertice1
        this.vertice2 = vertice2
        this.vertice3 = vertice3
    }

    //Metodo publico
    public calcularLongitudLados(): number[]{
        let lados: number[] = []
        lados.push(this.vertice1.calcularDistancia(this.vertice2))
        lados.push(this.vertice2.calcularDistancia(this.vertice3))
        lados.push(this.vertice3.calcularDistancia(this.vertice1))
        return lados
    }
}