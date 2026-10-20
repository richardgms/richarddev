# richardgomes.com.br

Site de apresentação do Richard Gomes (desenvolvedor web freelancer): uma página única com serviços, método, portfólio, dúvidas e contato pelo WhatsApp.

## Stack

- Next.js 16 (App Router, página estática) + React 19
- Tailwind CSS v4 (tokens em `src/app/globals.css`, bloco `@theme`)
- Fontes via `next/font/google`: Inter (texto), Outfit (títulos), Lexend (destaques em itálico), JetBrains Mono (rótulos)
- Hospedagem: Netlify (`netlify.toml`). Publica sozinho ao mesclar no `main`.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Estrutura

```
src/app/            layout (metadados, fontes), página, estilos globais
src/components/home seções da página, na ordem em que aparecem
src/components/ui   componentes reutilizáveis (SpotlightCard, botão, acordeão…)
src/hooks/          animação ao rolar e foco dos cards no celular
public/assets/      fotos, cards do portfólio, monograma, imagem de compartilhamento
docs/               design system e plano de otimização
```

## Documentação

- `docs/design-system.md`: padrões visuais e o SpotlightCard.
- `docs/PLANO-OTIMIZACAO.md`: auditoria de velocidade, acessibilidade, SEO e segurança, com notas antes e depois.

## Trabalho novo

Sempre em branch nova a partir do `main`, com PR. Mídia original e arquivos de design ficam fora do git (pastas ignoradas no `.gitignore`).
