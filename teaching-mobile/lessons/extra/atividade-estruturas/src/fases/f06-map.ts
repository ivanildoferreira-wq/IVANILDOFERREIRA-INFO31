/**
 * F06 — Map
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */

// TODO F06-A01
export function criarNotasPorAluno(): Map<string, number> {
  const notas = new Map<string, number>();
  notas.set("Ana", 8.5);
  notas.set("Bruno", 7);
  notas.set("Carla", 9);
  return notas;
}

// TODO F06-A02
export function registrarNota(
  notas: Map<string, number>,
  nome: string,
  nota: number,
): Map<string, number> {
  notas.set(nome, nota);
  return notas;
}

// TODO F06-A03
export function consultarNota(notas: Map<string, number>, nome: string): number | undefined {
  return notas.get(nome);
}

// TODO F06-A04
export function atualizarNota(
  notas: Map<string, number>,
  nome: string,
  novaNota: number,
): Map<string, number> {
  notas.set(nome, novaNota);
  return notas;
}

// TODO F06-A05
export function mapearTresNotas(
  nome1: string,
  nota1: number,
  nome2: string,
  nota2: number,
  nome3: string,
  nota3: number,
): Map<string, number> {
  const notas = new Map<string, number>();
  notas.set(nome1, nota1);
  notas.set(nome2, nota2);
  notas.set(nome3, nota3);
  return notas;
}