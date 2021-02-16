export class Punto{
    //Atributos
    private x: number
    private y: number

    //Constructor
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    //Metodos Getter y Setter
    public getX():number{
        return this.x
    }

    public getY():number{
        return this.y
    }

    public setX(x:number){
        this.x = x
    }

    public setY(y: number){
        this.y = y
    }

    //Metodos publicos
    public toString(){
        console.log(`(${this.x},${this.y})`);
    }

    public distanciaAlOrigen():number{
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }

    public calcularDistancia(otroPunto:Punto):number{
        return Math.sqrt(Math.pow((this.x-otroPunto.x),2)+Math.pow((this.y-otroPunto.y),2))
    }

    public calcularCuadrante():number{
        if (this.x == 0 || this.y == 0){
            return 0
        }
        else if (this.x > 0 && this.y > 0){
            return 1
        }
        else if (this.x < 0 && this.y > 0){
            return 2
        }
        else if (this.x < 0 && this.y < 0){
            return 3
        }
        else if (this.x > 0 && this.y < 0){
            return 4
        }
    }

    public calcularMasCercano(puntos: Punto[]):Punto{
        let punto: Punto
        let cercano: number = this.calcularDistancia(puntos[0])

        for (let i=0; i<puntos.length;i++){
            if (cercano > this.calcularDistancia(puntos[i])){
                cercano = this.calcularDistancia(puntos[i])
                punto = puntos[i]
            }
        }
        return punto
    }
}