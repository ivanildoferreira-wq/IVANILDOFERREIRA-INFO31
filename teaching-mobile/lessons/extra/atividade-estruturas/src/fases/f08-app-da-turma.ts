/**
 * F08 — Missão final: App da Turma
 * Os dados poderão alimentar uma interface Web/Mobile mais adiante.
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */

export type AlunoApp = {
  nome: string;
  idade: number;
};

export type AppDaTurma = {
  alunos: AlunoApp[];
  notasBimestrais: number[][];
  tecnologias: Set<string>;
  notasPorAluno: Map<string, number>;
};

export type PainelAluno = {
  aluno: AlunoApp;
  nota: number;
  media: number | undefined;
};

// TODO F08-A01
export function criarAppDaTurma(): AppDaTurma {
  return {
    alunos: [],
    notasBimestrais: [],
    tecnologias: new Set<string>(),
    notasPorAluno: new Map<string, number>(),
  };
}

// TODO F08-A02
export function adicionarAluno(
  app: AppDaTurma,
  aluno: AlunoApp,
  notas: number[],
): AppDaTurma {
  app.alunos.push(aluno);
  app.notasBimestrais.push(notas);
  return app;
}

// TODO F08-A03
export function registrarTecnologia(app: AppDaTurma, tecnologia: string): AppDaTurma {
  app.tecnologias.add(tecnologia);
  return app;
}

// TODO F08-A04
export function registrarMedia(app: AppDaTurma, nome: string, media: number): AppDaTurma {
  app.notasPorAluno.set(nome, media);
  return app;
}

// TODO F08-A05
export function consultarPainel(
  app: AppDaTurma,
  indiceAluno: number,
  bimestre: number,
): PainelAluno {
  const aluno = app.alunos[indiceAluno];
  const nota = app.notasBimestrais[indiceAluno][bimestre];
  const media = app.notasPorAluno.get(aluno.nome);

  return {
    aluno,
    nota,
    media,
  };
}
