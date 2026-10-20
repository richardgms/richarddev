# Plano de otimização — richardgomes.com.br

Início: 20/10/2026 · Branch: `richardgms/otimizacao` · Hospedagem: Netlify (deploy de produção ao mesclar no `main`)
Método: skill `otimizar-site` (investigar tudo → etapas por risco → um item por vez, medindo antes e depois).

## 1. Linha de base (Lighthouse celular, mediana de 3 rodadas)

| Ambiente | Desempenho | Acessib. | Boas práticas | SEO | FCP | LCP | TBT | CLS | Peso |
|---|---|---|---|---|---|---|---|---|---|
| Publicado (Netlify) | 93 | 90 | 100 | 100 | 1,3 s | 3,1 s | 62 ms | 0 | 370 KB |
| Local (`next start`) | 89 | 90 | 100 | 100 | 0,9 s | 3,7 s | 33 ms | 0 | 408 KB |

Compare sempre local com local e publicado com publicado (o local não tem CDN nem compressão igual).

## 2. Diagnóstico

Severidade: 🔴 alta · 🟠 média · 🟡 baixa

### Desempenho (P)
- **P1 🔴 LCP lento por animação de entrada.** O maior elemento da primeira tela é o parágrafo do topo. A coluna de texto começa com `fadeInUp` (opacidade 0 por 0,8 s): 73% do LCP é "atraso de renderização" (2,2 s), não download.
- **P2 🟠 Pesos de fonte imitados.** As 4 fontes são variáveis (1 arquivo por família, todos os pesos dentro), mas o código só declara alguns. O navegador **imita** Inter 700 (24 elementos), Outfit 900, JetBrains Mono 700 e Lexend 500. Declarar a faixa completa dá os pesos reais sem baixar nenhum byte a mais.
- **P3 🟡 Foto do topo maior que a exibição.** `sizes="90vw"` entrega 750 px para 463 px exibidos (−14 KB possíveis).
- **P4 🟡 JS.** 25 KB de JS não usado e 12 KB de polyfills antigos no pacote do React/Next; todas as seções são componentes de cliente só para a animação de surgir na rolagem. TBT já é baixo (33–62 ms).

### Acessibilidade (A) — nota 90
- **A1 🟠 Contraste:** botão "Solicitar orçamento" (texto azul-marinho sobre azul: 3,2:1, mínimo 4,5:1) e textos do rodapé (`#a3aed0` a 60%, `text-muted` 11 px).
- **A2 🟠 Menu do celular fechado** fica com `aria-hidden` mas seus links ainda recebem foco do teclado.
- **A3 🟡 Ordem de títulos:** cards do portfólio usam `h4` logo após `h2`.
- **A4 🟡 Nome acessível ≠ texto visível:** logo do topo e do rodapé ("Ir para a página inicial" × "Richard Gomes.").

### SEO e compartilhamento (S)
- **S1 🔴 Imagem de compartilhamento em SVG.** WhatsApp, Facebook, LinkedIn e X não exibem SVG: o link do site aparece sem imagem quando compartilhado.
- **S2 🟡 Sitemap** lista âncoras (`/#portfolio`), que o Google ignora, e data de fev/2026.
- **S3 🟡 Sem ícone para iPhone/Android** (`apple-touch-icon`); favicon .ico de 26 KB.
- **S4 🟠 Sem dados estruturados** (JSON-LD de serviço profissional + perguntas frequentes): perde destaque no Google.

### Infra e segurança (I)
- **I1 🔴 Next 16.1.6 com falhas conhecidas** (1 crítica, 4 altas em `npm audit`). Correção: 16.4.2 (mesma versão principal).
- **I2 🟠 Node 20 no Netlify** (`netlify.toml`): fim de suporte em abr/2026. Usar Node 22 ou 24.
- **I3 🟡 Cabeçalhos:** CSP libera `unsafe-eval` (desnecessário em produção) e o Microsoft Clarity, que não está instalado; `X-Powered-By: Next.js` exposto; `X-XSS-Protection` obsoleto.

### Organização (O)
- **O1 🟡 Arquivos sem uso:** 18 SVGs em `public/` (ícones antigos e os padrões do Next/Vite) e 3 componentes (`HeroProfileImage`, `HeroBackground`, `badge`). `rg-monogram.png` tem 171 KB para exibir 36 px.
- **O2 🟡 README** é o texto padrão do `create-next-app`; `src/docs/design-system.md` fora de `docs/`.

Sem banco de dados e sem APIs: não há risco de dados nesta otimização.

## 3. Decisões pendentes

- **D1 — Cor do texto do botão principal (A1).** Recomendo **texto branco** no azul atual (5,7:1, passa). Alternativa: escurecer o azul do botão. Manter como está deixa a acessibilidade abaixo de 100.
- **D2 — Animações de surgir só com CSS (P4).** Tira o JS de 6 seções. Ganho pequeno (TBT já é baixo) e mexe em todas as seções. Recomendo **deixar para depois**.
- **D3 — Microsoft Clarity.** A CSP já libera, mas não está instalado. Recomendo **remover da CSP agora** e instalar só se quiser mapas de calor.
- **D4 — Imagem de compartilhamento (S1).** Recomendo **converter o SVG atual para PNG 1200×630** (mesmo visual). Alternativa: nova arte com sua foto.
- **D5 — Publicação.** Recomendo **um PR por etapa** mesclado no `main` (o Netlify publica ao mesclar), com prévia do Netlify para medir antes.

## 4. Etapas

| Etapa | Itens | Risco |
|---|---|---|
| 0 Preparação | build local ok, linha de base | — |
| 1 Limpeza | O1, O2 | baixo |
| 2 Ganhos rápidos | P1, P2, P3, A2, A3, A4, A1 (após D1) | baixo (visual) |
| 3 SEO/compartilhamento | S1, S2, S3, S4 | baixo |
| 4 Infra/segurança | I1, I2, I3 | médio (dependências e cabeçalhos) |
| 5 JS (opcional) | P4 (após D2) | médio |
| 6 Vigilância | medir no ar, atualizar docs e playbook | — |

## 5. Registro

| Data | Item | Antes | Depois | Commit |
|---|---|---|---|---|
| 20/10 | Etapa 0 — investigação e linha de base | — | — | — |
