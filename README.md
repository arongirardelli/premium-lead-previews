# premium-lead-previews

Projeto para hospedar previas comerciais de landing pages para leads.

As paginas deste repositorio sao demonstracoes estrategicas criadas para apoiar conversas comerciais. Elas nao sao sites oficiais dos leads e nao devem afirmar informacoes que nao tenham sido fornecidas em briefing.

## Objetivo

Centralizar paginas demonstrativas premium, responsivas e mobile-first para apresentar ideias de landing pages com clareza, contexto comercial e rapidez de publicacao.

## Stack usada

- Next.js
- React
- TypeScript
- CSS moderno em arquivo global
- Estrutura preparada para deploy na Vercel

## Caminho das paginas

As previas de leads ficam em:

```txt
/leads/[slug]
```

Exemplo:

```txt
/leads/exemplo
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Comandos principais

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Como criar uma nova pagina de lead

1. Abra `src/lib/leads.ts`.
2. Adicione um novo item no array `leadPreviews`.
3. Defina um `slug` simples, por exemplo `la-crosta`.
4. Preencha os textos usando apenas informacoes fornecidas no briefing.
5. Acesse a pagina em `/leads/[slug]`.

Para o exemplo acima, o caminho seria:

```txt
/leads/la-crosta
```

## Rotas iniciais

- `/` - home interna do projeto
- `/leads/exemplo` - previa demonstrativa inicial
