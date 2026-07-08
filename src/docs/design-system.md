# Design System — richarddev

Referência central de padrões visuais e componentes do portfólio.

---

## SpotlightCard

**Arquivo:** `src/components/ui/spotlight-card.tsx`
**CSS base:** `.spotlight-card` em `src/app/globals.css`

O componente principal de card do projeto. Encapsula o efeito de brilho (borda + fundo) que segue o cursor do usuário.

### Como funciona

- `::before` — borda falsa via máscara CSS com gradiente radial. O brilho se move com o mouse.
- `::after` — glow interno translúcido no fundo do card. Aparece no hover.
- `--mouse-x` / `--mouse-y` — CSS variables atualizadas via `onMouseMove` + `requestAnimationFrame` (60fps).

### Uso básico

```tsx
import { SpotlightCard } from '@/components/ui/spotlight-card';

<SpotlightCard className="p-8 flex flex-col gap-5">
  <h3>Título</h3>
  <p>Descrição</p>
</SpotlightCard>
```

### Props

Aceita todas as props de um `<div>` HTML padrão. O `onMouseMove` externo é preservado via composição.

| Prop        | Tipo                        | Descrição                              |
|-------------|-----------------------------|----------------------------------------|
| `className` | `string`                    | Classes extras (padding, animação etc) |
| `children`  | `React.ReactNode`           | Conteúdo interno                       |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | Qualquer prop nativa de div       |

### Regras de uso

- **Sempre** use `SpotlightCard` no lugar de `<div className="spotlight-card">` ou `<Card className="spotlight-card">`.
- Não adicione `onMouseMove` manualmente — o componente já cuida disso.
- O `border-radius` base é `rounded-2xl` (1rem). Para exceções (ex: CTA com `rounded-3xl`), passe via `className` — a utility class sobrescreve.
- `border-none` é aplicado automaticamente. Para bordas intencionais (ex: card featured), passe `border border-brand/30` no `className`.

---

## Padrão de Ícone em Card

Usado em `ProblemSolutionSection` e qualquer card com ícone ilustrativo.

```tsx
<div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center text-[2.5rem]">
  <svg width="1em" height="1em" ...>...</svg>
</div>
```

| Token        | Valor                        | Descrição                     |
|--------------|------------------------------|-------------------------------|
| `w-14 h-14`  | 56px × 56px                  | Tamanho da caixinha            |
| `rounded-2xl`| 1rem                         | Arredondamento                 |
| `bg-brand/10`| brand com 10% opacidade      | Fundo levemente colorido       |
| `text-brand` | `--color-brand`              | Cor do ícone SVG               |
| `text-[2.5rem]` | 40px                      | Tamanho do ícone (igual ao Vite) |

---

## Tokens de Cor — Spotlight

Definidos em `globals.css` dentro de `.spotlight-card`:

| Token CSS                  | Valor                  | Uso                             |
|----------------------------|------------------------|---------------------------------|
| `rgba(0, 91, 235, 1)` / `#005beb`  | Azul marca          | Borda brilhante (`::before`)    |
| `rgba(0, 91, 235, 0.1)`            | Azul translúcido    | Glow interno (`::after`)        |
| `#292929`                  | Cinza escuro           | Cor base da borda em repouso    |
| `--mouse-x: -1000px`       | Fora da tela           | Posição inicial (sem glow)      |
| `--mouse-y: -1000px`       | Fora da tela           | Posição inicial (sem glow)      |

---

## Componentes que usam SpotlightCard

| Componente              | Qtd de cards | Observação                          |
|-------------------------|:------------:|-------------------------------------|
| `ProblemSolutionSection`| 3            | Cards de problema/solução           |
| `ServicesSection`       | 3            | Card featured tem borda `brand/30`  |
| `CTASection`            | 1            | Card grande com `rounded-3xl`       |
| `PortfolioSection`      | 6            | Dentro de `<a>` (link externo)      |
| `MethodologySection`    | 1            | Terminal de código                  |
| `HeroProfileImage`      | 1            | Imagem circular (handler próprio)   |

---

## Acessibilidade

- Em dispositivos touch (`hover: none`), o `::after` (glow interno) é desativado via media query.
- O `::before` (borda) permanece ativo em mobile como borda estática.
- `text-shadow` nas tipografias internas garante legibilidade sobre o neon.

---

## Exemplo completo — Card de Serviço

```tsx
<SpotlightCard className="p-8 md:p-10 flex flex-col items-start gap-6 text-white shadow-xl h-full">
  <CardHeader className="p-0">
    <CardTitle>Nome do Serviço</CardTitle>
  </CardHeader>
  <CardContent className="p-0 flex-1">
    <CardDescription>Descrição do serviço.</CardDescription>
  </CardContent>
  <CardFooter className="p-0 mt-auto">
    <Button href="#contato" variant="link" className="p-0 h-auto">
      Saiba mais →
    </Button>
  </CardFooter>
</SpotlightCard>
```
