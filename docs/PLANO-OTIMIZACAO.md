# Plano de otimização — richardgomes.com.br

Início: 20/10/2026 · Branch: `richardgms/otimizacao` · Hospedagem: Netlify (deploy de produção ao mesclar no `main`)
Método: skill `otimizar-site` (investigar tudo → etapas por risco → um item por vez, medindo antes e depois).

## 1. Linha de base (Lighthouse celular, mediana de 3 rodadas)

| Ambiente | Desempenho | Acessib. | Boas práticas | SEO | FCP | LCP | TBT | CLS | Peso |
|---|---|---|---|---|---|---|---|---|---|
| Publicado (Netlify) | 93 | 90 | 100 | 100 | 1,3 s | 3,1 s | 62 ms | 0 | 370 KB |
| Local (`next start`) | 89 | 90 | 100 | 100 | 0,9 s | 3,7 s | 33 ms | 0 | 408 KB |

| Prévia Netlify (PR #3, 20/10) | 93 | 96 | 100 | 69¹ | 1,2 s | 2,9 s | 80 ms | 0 | 377 KB |
| Produção no mesmo horário | 93 | 90 | 100 | 100 | 1,4 s | 2,9 s | 106 ms | 0 | 370 KB |

Compare sempre local com local e publicado com publicado (o local não tem CDN nem compressão igual).
Prévia medida com 5 rodadas e a barra de comentários do Netlify bloqueada (`--blocked-url-patterns="*/.netlify/scripts/*"`): ela só existe na prévia, causa erro de CSP e pesa 0,5 s de CPU.
¹ A prévia recebe `X-Robots-Tag: noindex` do Netlify; em produção o SEO continua 100.

**Por que a nota de desempenho quase não mudou:** o Lighthouse *simula* um celular lento e, neste site, amarra o LCP ao carregamento do JavaScript do Next (bloqueando o JS a nota local vai a 97). O que o visitante vê melhorou: no navegador real o LCP agora acontece junto com o primeiro desenho (FCP), antes vinha ~650 ms depois por causa da animação. Para subir a nota simulada, o caminho é menos JavaScript (D2).

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

- **D1 — Cores com contraste (A1).** Três ajustes: (a) texto do botão principal em **branco** no azul atual (3,2 → 5,7:1); (b) cinza "muted" um pouco mais claro, `#6b7a99` → `#7a89a8` (4,5 → 5,1:1), e o © do rodapé sem a transparência; (c) azul em texto pequeno (rótulos como "FULLSTACK & IA", ".BR") usando o azul claro `#3380f2` (3,3 → 4,9:1). Recomendo **os três** (acessibilidade 96 → 100). Contra: muda levemente o visual da marca. Comparação A/B na página de acompanhamento; versão B pronta na branch `ab/cores-acessiveis`.
- **D2 — Animações de surgir só com CSS (P4).** Tira o JS de 6 seções. Mexe em todas as seções, mas é o único caminho para subir a nota simulada (ver nota acima). Recomendo **fazer numa segunda rodada**, depois de publicar esta.
- **D3 — Microsoft Clarity** (mapas de calor e gravação de visitas, grátis; ~25 KB de JS e pede aviso de privacidade pela LGPD). A CSP já libera, mas não está instalado. Recomendo **remover da CSP agora** e instalar só se quiser mapas de calor.
- **D4 — Imagem de compartilhamento (S1).** ✅ Decidido: PNG da arte atual. Fonte SVG em `Documentos/Richard Gomes - Design/`.
- **D5 — Publicação.** Recomendo **um PR por etapa** mesclado no `main` (o Netlify publica ao mesclar), com prévia do Netlify para medir antes.

## 4. Etapas

| Etapa | Itens | Risco |
|---|---|---|
| 0 Preparação ✅ | build local ok, linha de base | — |
| 1 Limpeza ✅ | O1, O2 | baixo |
| 2 Ganhos rápidos (falta A1/D1) | P1, P2, P3, A2, A3, A4, A1 (após D1) | baixo (visual) |
| 3 SEO/compartilhamento ✅ | S1, S2, S3, S4 | baixo |
| 4 Infra/segurança ✅ (Clarity: D3) | I1, I2, I3 | médio (dependências e cabeçalhos) |
| 5 JS (opcional) | P4 (após D2) | médio |
| 6 Vigilância | medir no ar, atualizar docs e playbook | — |

## 5. Registro

| Data | Item | Antes | Depois | Commit |
|---|---|---|---|---|
| 20/10 | Etapa 0 — investigação e linha de base | — | — | 60b197d |
| 20/10 | O1 arquivos sem uso, monograma | 171 KB | 8 KB | 84cea55 |
| 20/10 | O2 README, design system em docs/ | — | — | 5be05bb |
| 20/10 | P1 entrada do topo sem opacidade | LCP real 1,0 s; simulado 3,7 s; nota 89 | LCP real 0,3 s; simulado 3,5 s; nota 91 (local) | 8b7bf15 |
| 20/10 | P2 fontes com pesos reais | 4 negritos imitados, 152 KB | 0 imitados, 152 KB | 99ba666 |
| 20/10 | P3 foto do topo | — | não compensa: 14 KB estimados, perderia nitidez em tela densa | — |
| 20/10 | A2 A3 A4 menu, títulos, logo | acessib. 90 | 96 | c84c619 |
| 20/10 | S2 sitemap/robots pelo Next | âncoras, data de fev | 1 URL, data do build | d99b802 |
| 20/10 | S3 ícone de tela inicial | — | apple-icon 180 px | 08669bf |
| 20/10 | S4 dados estruturados | — | Person, ProfessionalService, WebSite, FAQPage² | c6c82fa |
| 20/10 | I1 Next 16.4.2 + audit fix | 6 vulnerab. (1 crítica) | 0 em produção (5 só no lint) | a321de2 |
| 20/10 | I2 Node no Netlify | 20 | 24 (build da prévia ok) | f5db25f |
| 20/10 | I3 cabeçalhos | unsafe-eval, X-Powered-By | só em dev; removido; Permissions-Policy | d37a8e2 |
| 20/10 | extra: fillRule/clipRule em SVG (aviso do React) | 2 avisos | 0 | 4a25eb9 |
| 20/10 | Push da branch + PR #3 (rascunho) com prévia | — | prévia ok | — |
| 20/10 | S1 imagem de compartilhamento | SVG (não aparece no WhatsApp) | PNG 1200×630, 150 KB; pílula do endereço corrigida | 6928733 |
| 20/10 | D1 versão B das cores (branch `ab/cores-acessiveis`, não mesclada) | acessib. 96 | 100 (celular e computador) | c61bcd9 |

² Desde 2023 o Google só mostra o destaque de perguntas frequentes para sites de governo e saúde; o FAQPage fica por ajudar buscas com IA. O ganho principal é o ProfessionalService/Person.
