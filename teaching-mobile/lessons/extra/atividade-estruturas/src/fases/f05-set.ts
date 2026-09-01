/**
 * F05 — Set
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */

// TODO F05-A01
export function criarTecnologias(): Set<string> {
  const tecnologias = new Set<string>();
  tecnologias.add("JavaScript");
  tecnologias.add("TypeScript");
  tecnologias.add("React");
  return tecnologias;
}

// TODO F05-A02
export function adicionarTecnologia(tecnologias: Set<string>, valor: string): Set<string> {
  tecnologias.add(valor);
  return tecnologias;
}

// TODO F05-A03
export function quantidadeUnica(tecnologias: Set<string>): number {
  return tecnologias.size;
}

// TODO F05-A04
export function semDuplicatas(valores: string[]): Set<string> {
  return new Set<string>(valores);
}
