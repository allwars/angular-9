import{ Component } from '@angular/core';

@Component({
   selector:'micomponente',
   templateUrl: './micomponente.component.html'
})
export class micomponente{
    public titulo: string;
    public class: string;
    public comentario : string;
    public year: number;
    constructor(){
        this.class = "clase";
        this.titulo = "Este es mi primer componente";
        this.comentario = " va bien la cosa a ver cómo sale";
        this.year = 2020;
        console.log("Componente works");
        console.log(this.titulo, this.comentario, this.year);
    }
}