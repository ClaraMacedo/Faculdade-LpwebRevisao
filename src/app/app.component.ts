import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    vingadores: Array<Vingador>;
    novo: Vingador = new Vingador(0, '', '', '');
    ultimo_id = 5;
    editando = false;

    constructor() {
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers', 'https://upload.wikimedia.org/wikipedia/pt/b/bc/Steven_Rogers_%28Earth-616%29.jpg'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff', 'https://upload.wikimedia.org/wikipedia/pt/1/1c/Black_Widow_Vol_6_12.jpg'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers', 'http://vignette2.wikia.nocookie.net/marveldatabase/images/1/18/Ms._Marvel_Vol_3_2_Molina_Variant_Textless.jpg/revision/latest?cb=20140224055605'),
            new Vingador(4, 'Deadpool', 'Wade Wilson', 'http://s3.foxmovies.com/foxmovies/production/films/103/images/featured_content/111-front.jpg'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton', 'https://upload.wikimedia.org/wikipedia/pt/c/cc/Gavi%C3%A3o_Arqueiro_por_Clint_Langley.JPG')
        ];
    }

    ngOnInit(): void {
    }

    cadastrar(novo: Vingador): void {
        if (!this.editando) {
            const novoId: number = ++this.ultimo_id;
            this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.pessoa, this.novo.urlImagem));
            this.novo = new Vingador(0, '', '', '');
        } else {
            this.novo = new Vingador(0, '', '', '');
            this.editando = false;
        }
    }

    encontrar(id: number): number {
        let indice = -1;
        for (let i = 0; i < this.vingadores.length; i++) {
            if (this.vingadores[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    excluir(heroi: Vingador): void {
        this.vingadores.splice(this.vingadores.indexOf(heroi), 1);
        this.novo = new Vingador(0, '', '', '');
    }

    editar(heroi: Vingador): void {
        this.novo = heroi;
        this.editando = true;
    }
}
