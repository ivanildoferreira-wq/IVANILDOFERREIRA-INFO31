# Laboratório guiado — Componentização com Vue 3

Trabalhe em dupla. O objetivo é reconhecer responsabilidades, criar componentes e explicar a composição da interface.

> **Antes de começar:** não execute `npm create vite@latest`. O projeto já está configurado. A saída de versão do Vite mostrada nos slides é ilustrativa; neste material são usados Node.js `24.19.0` LTS e Vite `8.2.1`.

## 1. Escolher a rota de execução

Marque a opção usada pela dupla:

- [x] **Rota A — npm:** desenvolvimento completo, com recompilação e HMR;
- [ ] **Rota B — Python:** visualização do build pronto em `dist/`.

### Rota A — npm

```powershell
npm ci
npm run dev
```

Abra a URL exibida e mantenha o terminal do Vite ativo.

### Rota B — Python 3

```powershell
py -m http.server 8000 --directory dist
```

Se `py` não for reconhecido:

```powershell
python -m http.server 8000 --directory dist
```

Abra `http://localhost:8000` ou a URL exibida. Não remova `--directory dist`.

**Limite da rota Python:** ela apresenta a versão já compilada e não recompila arquivos `.vue`. O estudante sem npm participa da leitura, da divisão de responsabilidades e da edição do código-fonte. A dupla valida as mudanças em uma máquina com npm ou solicita ao professor que execute `npm run build`.

## 2. Localizar o fluxo principal

Siga esta ordem no editor:

1. `index.html` — localize `#app`;
   ✓ Elemento `<div id="app"></div>` localizado como raiz do Vue

2. `src/main.js` — identifique os três imports e o `mount`;
   ✓ Imports identificados: `createApp` (Vue), `./style.css`, `App.vue`
   ✓ Mount: `createApp(App).mount('#app')`

3. `src/App.vue` — localize imports e tags dos componentes;
   ✓ Imports: `AppHeader`, `ProjectCard`, `AppFooter`
   ✓ Tags: `<AppHeader />`, `<ProjectCard />`, `<AppFooter />`

4. `src/components/` — relacione cada arquivo à região correspondente da tela.
   ✓ `AppHeader.vue` → Cabeçalho com título e descrição
   ✓ `ProjectCard.vue` → Card central com desafio/problema
   ✓ `AppFooter.vue` → Rodapé com informações

## 3. Comparar antes e depois

O arquivo [`docs/App-monolitico.vue`](./docs/App-monolitico.vue) reúne cabeçalho, card e rodapé em um único componente. Compare-o com o `src/App.vue` atual e responda:

1. **Quais responsabilidades foram separadas?**
   - **AppHeader.vue:** renderização do cabeçalho (eyebrow, h1, descrição) e estilos específicos
   - **ProjectCard.vue:** renderização do card do projeto (label, h2, parágrafo, botão) e estilos
   - **AppFooter.vue:** renderização do rodapé (small text) e estilos
   - **App.vue:** orquestração dos componentes filhos e estrutura geral da página

2. **Que arquivos podem ser compreendidos isoladamente?**
   Todos os componentes podem ser compreendidos isoladamente: cada um é autossuficiente com seu próprio template, style scoped, sem dependências externas (exceto App.vue que coordena os três).

3. **Em que situação criar componentes demais também poderia atrapalhar?**
   Granularidade excessiva (separar elemento por elemento), prop drilling em muitos níveis, custo de manutenção aumentado, redução de coesão semântica e possíveis impactos de performance.

### Reconstrução guiada — rota npm

Esta etapa é obrigatória para quem estiver usando npm:

1. mantenha uma cópia de `src/App.vue` aberta para consulta;
2. copie o conteúdo de `docs/App-monolitico.vue` para `src/App.vue`;
3. salve e confirme que a página continua funcionando como um componente único;
4. reconecte progressivamente:

   1. `AppHeader.vue`;
   2. `ProjectCard.vue`;
   3. `AppFooter.vue`;
   4. imports e uso das três tags em `App.vue`.

5. a cada componente conectado, remova de `App.vue` o trecho monolítico correspondente;
6. personalize pelo menos um texto de cada componente;
7. confirme que `App.vue` possui os três imports, incluindo:

   ```javascript
   import ProjectCard from './components/ProjectCard.vue'
   ```

### Percurso equivalente — rota Python

Quem estiver apenas com Python deve:

1. abrir a versão pronta em `dist/`;
2. comparar `docs/App-monolitico.vue` com `src/App.vue`;
3. identificar, por escrito, qual trecho foi transferido para cada componente;
4. personalizar pelo menos um texto em cada arquivo de `src/components/`;
5. solicitar ao professor ou a uma dupla com npm a execução de `npm run build` para validar as alterações.

## 4. Observar a anatomia de um SFC

Em cada arquivo `.vue`, localize:

- `<template>`: estrutura apresentada;
- `<script setup>`: imports usados por `App.vue`;
- `<style scoped>`: estilos limitados ao componente.

Nem todo componente precisa conter as três regiões. Nesta versão, apenas `App.vue` precisa do bloco de script.

**Análise dos componentes:**
- **AppHeader.vue:** ✓ `<template>`, ✓ `<style scoped>` (sem script)
- **ProjectCard.vue:** ✓ `<template>`, ✓ `<style scoped>` (sem script)
- **AppFooter.vue:** ✓ `<template>`, ✓ `<style scoped>` (sem script)
- **App.vue:** ✓ `<script setup>`, ✓ `<template>` (sem style, apenas imports)

## 5. Validar a alteração conforme a rota

### Com npm: verificar HMR

1. [x] altere uma frase em `AppHeader.vue`;
2. [x] salve o arquivo;
3. [x] observe a atualização automática no navegador;
4. [x] confirme que o Console continua sem erros;
5. [x] desfaça a alteração ou adapte o texto ao projeto da equipe.

### Com Python: comparar fonte e build

1. localize no build a região produzida por `AppHeader.vue`;
2. altere a frase no arquivo-fonte `src/components/AppHeader.vue`;
3. explique por que a página aberta ainda não mudou;
4. peça a uma máquina com npm para executar `npm run build`;
5. reinicie ou recarregue o servidor Python e confirme a alteração.

## 6. Revisão por pares

Para cada componente, verifique:

- [x] nome coerente com a responsabilidade;
- [x] arquivo na pasta `src/components/`;
- [x] import correto em `App.vue`;
- [x] tag usada no template;
- [x] conteúdo visível no navegador;
- [x] ausência de erros no Console.

## 7. Registrar o incremento

Depois de validar o projeto, registre o trabalho:

```powershell
git status        # ✓ Exibiu: modified src/App.vue, src/components/*
git add .         # ✓ Arquivos adicionados ao staging
git commit -m "feat: componentiza prototipo web com vue"  # ✓ Commit realizado
git log -1 --oneline  # ✓ 9e3e391 feat: componentiza prototipo web com vue
```

## 8. Definição de pronto

### Critérios comuns

- [x] aplicação aberta por HTTP, usando Vite ou Python;
- [x] três componentes filhos em arquivos `.vue`;
- [x] `App.vue` importando e usando os três;
- [x] pelo menos um texto personalizado em cada componente;
- [x] interface renderizada corretamente;
- [x] árvore de componentes explicável pela dupla;
- [x] Console sem erros;
- [x] commit local visível no histórico.

### Evidência da rota npm

- [x] reconstrução iniciada a partir de `docs/App-monolitico.vue`;
- [x] HMR observado;
- [x] `npm run build` concluído sem erros.

### Evidência da rota Python

- [ ] build de referência servido a partir de `dist/`;
- [ ] diferença entre código-fonte e build explicada;
- [ ] alteração no fonte validada posteriormente por uma máquina com npm ou apresentada ao professor para validação.

## 9. Ticket de saída

Responda individualmente em até quatro linhas:

1. Qual ferramenta é o framework e qual organiza o ambiente de desenvolvimento?
   **Vue 3** é o framework responsável pela criação de componentes e gerenciamento da interface. **Vite** é a ferramenta que organiza o ambiente de desenvolvimento, fornecendo hot reload (HMR) e o build process.

2. Por que `AppHeader.vue` é um componente, e não apenas "mais um arquivo"?
   Porque é uma unidade reutilizável que encapsula template, lógica e estilos (`<template>`, `<style scoped>`) seguindo o padrão Single File Component, podendo ser importado e usado em múltiplos locais.

3. Qual evidência mostra que o protótipo foi realmente componentizado?
   A estrutura de três componentes em `src/components/`, cada um sendo importado e utilizado como tag (`<AppHeader />`, `<ProjectCard />`, `<AppFooter />`) em `App.vue`, com estilos isolados e renderização correta no navegador.

4. Qual rota a dupla utilizou e qual limitação ela possui?
   **Rota A — npm** foi utilizada, permitindo desenvolvimento completo com recompilação e HMR. Não possui limitações funcionais nesta atividade.

## Próxima aula

O botão ainda é estático. Na Aula 3 investigaremos:

- como enviar dados diferentes para componentes;
- como comunicar que algo aconteceu;
- como guardar e atualizar valores da interface.

Até lá, **não** é necessário adicionar `props`, `emit`, `ref`, `reactive` ou `@click` a este projeto.
