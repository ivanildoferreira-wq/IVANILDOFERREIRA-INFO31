/**
 * F02 — Array
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

// TODO F02-A01
export function criarAlunos(): string[] {
  return  ["Ana", "Bruno", "Carla"];
}

// TODO F02-A02
export function obterAluno(alunos: string[], indice: number): string {
  return alunos[indice];
}

// TODO F02-A03
export function primeiroAluno(alunos: string[]): string {
  return alunos[0];
}

// TODO F02-A04
export function alterarNota(notas: number[], indice: number, novaNota: number): number[] {
  notas[indice] = novaNota;
  return notas;
}

// TODO F02-A05
export function quantidadeDeAlunos(alunos: string[]): number {
  return alunos.length;
}

// TODO F02-A06
export function adicionarAluno(alunos: string[], novoAluno: string): string[] {
  alunos.push(novoAluno);
  return alunos;
}
