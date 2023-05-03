import { Prato } from "./Prato";

export interface Restaurante {
    id: number;
    nome: string;
    telefone: string;
    endereco: string;
    pratos: Prato[];
}
