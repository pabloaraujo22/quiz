export default class RespostaModel {
    #valor: string;
    #certa: boolean;
    #revelada: boolean;

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false);
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true);
    }

    get valor() {
        return this.#valor;
    }

    get certa() {
        return this.#certa;
    }

    get revelada() {
        return this.#revelada;
    }
    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true);
    }

    static criarUsandoObjeto(obj): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.revelada);
    }

    paraObjeto() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada,
        };
    }
}
