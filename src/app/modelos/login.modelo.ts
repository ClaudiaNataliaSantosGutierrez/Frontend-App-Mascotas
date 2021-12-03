import { ModeloDatos } from "./datos.modelo";

export class ModeloLogin {
    datos?: ModeloDatos;
    tk?: String;
    estaIdentificado: boolean = false;
}