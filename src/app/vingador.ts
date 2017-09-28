export class Vingador {
    id: number;
    nome: string;
    pessoa: string;
    urlImagem: string;

    constructor(id: number, nome: string, pessoa?: string, urlImagem?:string) {
        this.id = id;
        this.nome = nome;
        this.pessoa = pessoa;
        this.urlImagem = urlImagem;
    }
}