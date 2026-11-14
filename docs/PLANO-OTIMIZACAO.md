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
| **Produção depois (20/10, 5 rodadas)** | **94** | **100** | **100** | **100** | 1,3 s | 2,9 s | 96 ms | 0 | 376 KB |

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
- **S4 🟠 Sem dados estruturados** (JSON-LD de serviço profissional + perguntas frequentes): faltava descrição explícita das entidades. Marcação não garante destaque no Google nem citações em IA (ressalva revisada em 2026-11-14).

### Infra e segurança (I)
- **I1 🔴 Next 16.1.6 com falhas conhecidas** (1 crítica, 4 altas em `npm audit`). Correção: 16.4.2 (mesma versão principal).
- **I2 🟠 Node 20 no Netlify** (`netlify.toml`): fim de suporte em abr/2026. Usar Node 22 ou 24.
- **I3 🟡 Cabeçalhos:** CSP libera `unsafe-eval` (desnecessário em produção) e o Microsoft Clarity, que não está instalado; `X-Powered-By: Next.js` exposto; `X-XSS-Protection` obsoleto.

### Organização (O)
- **O1 🟡 Arquivos sem uso:** 18 SVGs em `public/` (ícones antigos e os padrões do Next/Vite) e 3 componentes (`HeroProfileImage`, `HeroBackground`, `badge`). `rg-monogram.png` tem 171 KB para exibir 36 px.
- **O2 🟡 README** é o texto padrão do `create-next-app`; `src/docs/design-system.md` fora de `docs/`.

Sem banco de dados e sem APIs: não há risco de dados nesta otimização.

## 3. Decisões (todas resolvidas em 20/10)

- **D1 — Cores com contraste (A1).** ✅ Aprovada a versão B. Três ajustes: (a) texto do botão principal em **branco** no azul atual (3,2 → 5,7:1); (b) cinza "muted" um pouco mais claro, `#6b7a99` → `#7a89a8` (4,5 → 5,1:1), e o © do rodapé sem a transparência; (c) azul em texto pequeno (rótulos como "FULLSTACK & IA", ".BR") usando o azul claro `#3380f2` (3,3 → 4,9:1). Recomendo **os três** (acessibilidade 96 → 100). Contra: muda levemente o visual da marca. Comparação A/B na página de acompanhamento; versão B pronta na branch `ab/cores-acessiveis`.
- **D2 — Animações de surgir só com CSS (P4).** ⏸ Fica para a 2ª rodada. Tira o JS de 6 seções. Mexe em todas as seções, mas é o único caminho para subir a nota simulada (ver nota acima). Recomendo **fazer numa segunda rodada**, depois de publicar esta.
- **D3 — Microsoft Clarity** ✅ Liberação removida. (mapas de calor e gravação de visitas, grátis; ~25 KB de JS e pede aviso de privacidade pela LGPD). A CSP já libera, mas não está instalado. Recomendo **remover da CSP agora** e instalar só se quiser mapas de calor.
- **D4 — Imagem de compartilhamento (S1).** ✅ Decidido: PNG da arte atual. Fonte SVG em `Documentos/Richard Gomes - Design/`.
- **D5 — Publicação.** ✅ PR #3 mesclado em 20/10 21:21. Recomendo **um PR por etapa** mesclado no `main` (o Netlify publica ao mesclar), com prévia do Netlify para medir antes.

## 4. Etapas

| Etapa | Itens | Risco |
|---|---|---|
| 0 Preparação ✅ | build local ok, linha de base | — |
| 1 Limpeza ✅ | O1, O2 | baixo |
| 2 Ganhos rápidos ✅ | P1, P2, P3, A2, A3, A4, A1 (após D1) | baixo (visual) |
| 3 SEO/compartilhamento ✅ | S1, S2, S3, S4 | baixo |
| 4 Infra/segurança ✅ | I1, I2, I3 | médio (dependências e cabeçalhos) |
| 5 JS (opcional) | P4 (após D2) | médio |
| 6 Vigilância ✅ | medir no ar, atualizar docs e playbook | — |

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
| 20/10 | A1 cores com contraste (versão B aprovada) | acessib. 96 | 100 (celular e computador) | 1401041 |
| 20/10 | I3 Clarity removido da CSP | liberado sem uso | removido | 7c98a87 |
| 20/10 | Publicação (PR #3) + teste no ar | nota 93/90/100/100 | 94/100/100/100; LCP real = FCP; páginas, imagem, sitemap e ícone ok; menu ok; 0 erros no console | 36981a1 |

² FAQPage, ProfessionalService e Person descrevem informações da página. Não foi demonstrado ganho de citações em IA ou rich results neste projeto. O suporte a recursos específicos deve ser conferido na documentação atual do Google; a marcação, por si só, não garante exibição (ressalva revisada em 2026-11-14).

## 6. Depois da publicação

| Data | Item | Antes | Depois | Commit |
|---|---|---|---|---|
| 20/10 | Search Console: `richardgomes.com.br` como propriedade de domínio na conta profissional (TXT no DNS do Netlify) | sem cadastro | verificado | — |
| 20/10 | Favicon com o monograma RG (o Search Console mostrava o triângulo padrão do Next/Vercel) | favicon.ico padrão, 26 KB | ico 16/32/48 (5 KB) + icon.png 192 | PR #4 |
| 20/10 | Cloudflare Web Analytics (só no site publicado: `CONTEXT=production`; CSP + static.cloudflareinsights.com e cloudflareinsights.com) | sem medição de visitas | visitas chegando (POST 204); A/B intercalado 5×5 sem × com o contador: perf 89 × 91, sem efeito mensurável; +10 KB | PR #5 |

## 7. SEO, AEO e GEO — 2026-11-14

Skill: `seo-aeo-geo`. Fonte conceitual única: `C:/Users/joalh/Documentos/Fluxo de trabalho - conhecimento/seo-aeo-geo.md` (não duplicada aqui). Branch: `seo/aeo-geo`; entrega por PR para `main`, conforme o README. Escopo desta rodada: configuração técnica das páginas públicas existentes. Sem alteração de WAF, treinamento, autenticação, conteúdo comercial ou animações.

### Linha de base publicada

Auditoria de leitura em `https://richardgomes.com.br`, com 15 requisições: home, privacidade, robots, sitemap, página inexistente, variantes HTTP/www, três assets e cinco User-Agents simulados. Respostas HTTP não comprovam indexação, identidade de crawler ou recomendação por IA.

| Verificação | Resultado antes das correções |
|---|---|
| Home e `/privacidade` | HTTP 200, canonical da própria página e `index, follow`; sem X-Robots-Tag na resposta testada |
| HTTP e www | Um redirecionamento 301 para `https://richardgomes.com.br/` |
| URL inexistente | HTTP 404 real; não é soft 404 |
| Conteúdo no HTML | Serviços, seis projetos e três respostas do FAQ já presentes, sem precisar executar JavaScript para obter o texto |
| JSON-LD | Person, ProfessionalService, WebSite e FAQPage; JSON parseável e três respostas correspondentes ao HTML, normalizando espaços |
| Imagens de compartilhamento, perfil e favicon | HTTP 200 nos três recursos |
| Robots | `User-agent: * / Allow: /` e sitemap correto; permite busca e treinamento pela política atual, que foi preservada |
| User-Agents simulados | Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot e PerplexityBot receberam HTTP 200 com conteúdo; não é verificação de acesso a partir de IPs oficiais |
| Sitemap | Somente home; `/privacidade` está pública/indexável e ligada no rodapé, mas ausente. `lastmod` usa a data do build, não uma revisão real |
| Menu em privacidade | Links `#home`, `#servicos`, `#portfolio`, `#faq` e `#contato` apontam para âncoras inexistentes nessa rota |
| Compartilhamento de privacidade | Canonical correto, mas Open Graph e Twitter herdados da home, incluindo URL e título comerciais |
| Renderização progressiva | 25 elementos com classes de entrada `opacity-0` no HTML inicial; o texto existe, mas a apresentação depende de JS/rolagem. Avaliação visual sem JS pendente, sem inferir perda de ranking |

Evidências brutas temporárias: `%TEMP%/codex-richarddev-seo-20261114/baseline.json`, `home.html`, `privacidade.html` e `missing.html`. Os achados relevantes estão consolidados nesta seção para não depender dos temporários.

### Ações desta rodada

| ID | Prioridade | Ação | Estado |
|---|---|---|---|
| GEO1 | Baixa | Sitemap com home e privacidade; omitir lastmod até existir data real de revisão, sem fragmentos | Implementado; XML validado no build servido por HTTP |
| GEO2 | Média | Navegação global aponta para `/#...`, funcionando também em privacidade | Implementado; links do HTML resolvem para IDs existentes na home; clique visual não testado |
| GEO3 | Baixa | Metadados sociais de privacidade descrevem essa rota e preservam a imagem | Implementado; Open Graph e Twitter conferidos no HTML servido |
| GEO4 | Documentação | Retirar do plano e comentário a alegação não comprovada de que FAQPage garante vantagem em IA | Corrigido |

### Validação e limites

- Ambiente encontrado: Node 24.22.1, lockfile com Next 16.4.2, mas `node_modules` com Next 16.1.6. Dependências restauradas pelo lockfile com `npm ci --ignore-scripts --no-audit --no-fund`; nenhuma atualização de manifesto. Guias locais de sitemap, metadados e JSON-LD consultados depois da restauração.
- `npm run build`: passou com Next 16.4.2, incluindo TypeScript e geração estática. A primeira tentativa no sandbox falhou por bloqueio de rede ao Google Fonts; passou ao repetir com acesso autorizado. Nenhuma mudança gerada pelo build entrou no código-fonte.
- `npm run lint -- src`: passou em todo o código publicado. `npm run lint` completo falhou com 2 erros e 8 avisos em `Melhorar UI do site/support.js`, material local preexistente ignorado pelo Git; não foi alterado para encobrir a falha nem incluído no PR.
- Smoke test HTTP do build local: 7 respostas conferidas (home, privacidade, sitemap, robots, 404, imagem OG e favicon). Canonicals, H1 único por página, FAQ no HTML, JSON-LD e metadados da home preservados, navegação de privacidade para IDs da home, Open Graph/Twitter próprios da privacidade e sitemap com duas URLs sem datas artificiais. Robots comparado com produção: política idêntica. Resultado em `%TEMP%/codex-richarddev-seo-20261114/after-local.json`; servidor temporário encerrado ao terminar.
- [PR #7](https://github.com/richardgms/richarddev/pull/7) aberto com quatro commits por item. [Prévia Netlify](https://deploy-preview-7--richardgomes.netlify.app) publicada com sucesso; checks de build, cabeçalhos e redirecionamentos passaram. Repetida a conferência HTTP das 7 URLs na prévia: correções presentes, home/JSON-LD/robots preservados e `X-Robots-Tag: noindex` mantido nas duas páginas, sem indexar a prévia. Resultado em `%TEMP%/codex-richarddev-seo-20261114/after-preview.json`. Produção passa a receber as correções quando o PR for mesclado.
- Conector de navegador indisponível nesta sessão; não foi possível validar DOM hidratado, interação visual ou layout mobile por ele. Não foram instalados navegador ou dependências de automação adicionais.
- Não foram consultados nesta rodada os painéis de Search Console/Bing, analytics, perfis comerciais ou logs da Netlify. O registro de Search Console de 20/10 é histórico, não uma conferência atual.
- Não houve teste de recomendações em contas de ChatGPT, Claude, Perplexity ou Copilot; não há linha de base de citações e não se afirma ganho de visibilidade.

### Próximos acompanhamentos

1. Depois de publicar: verificar home, privacidade, sitemap, robots, redirecionamentos, 404, imagens e metadados; preservar noindex dos deploy previews.
2. Nos painéis: conferir cobertura/indexação e sitemap no Google/Bing, com atenção à home comercial; medir contatos de WhatsApp e origem do tráfego sem presumir atribuição completa de IA.
3. Conteúdo: confirmar atendimento remoto/área atendida antes de explicitar alcance; revisar alegações de leads diários, satisfação garantida, quantidade de projetos e estatística de 81% com evidências. Criar casos detalhados só com dados reais e autorização do cliente.
4. Reavaliar D2 (animações/JS) com teste visual, incluindo navegação sem JS, antes de ampliar esta rodada. Não reescrever conteúdo só para modelos nem adicionar llms.txt sem consumidor ou experimento concreto.
5. Quando houver medição: registrar consultas de marca, criação de sites/landing pages e buscas locais pertinentes; repetir ao longo do tempo, distinguindo descoberta espontânea de testes que fornecem a URL.

### Referências verificadas

- [Google: otimização para recursos generativos](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide/).
- [Google: sitemap e lastmod](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- [Next.js: sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap), [metadados](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) e [JSON-LD](https://nextjs.org/docs/app/guides/json-ld); guias correspondentes da versão instalada consultados em `node_modules/next/dist/docs/`.
- [Perplexity: crawlers de busca e acesso por usuário](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).
