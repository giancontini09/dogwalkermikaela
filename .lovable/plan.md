## Landing Page — Dog Walker Higienópolis

Single-page de conversão, mobile-first, com foco em levar o visitante para o WhatsApp.

### Estrutura da página (uma rota só: `/`)

Página única com rolagem suave entre seções (âncoras internas), pois o objetivo é conversão direta no WhatsApp — não há conteúdo independente para virar páginas separadas.

1. **Header fixo** — logo "Dog Walker Higienópolis" + botão WhatsApp laranja sempre visível.
2. **Hero** — título "Passeios seguros e felizes para o seu cachorro em Higienópolis", subtítulo, CTA laranja "Falar no WhatsApp", imagem placeholder do walker com cachorro.
3. **Problema** — 3 dores comuns do tutor (pouco tempo, cachorro entediado, insegurança com desconhecidos).
4. **Solução** — apresentação do serviço com 3–4 cards (passeios individuais/duplas, horário flexível, relatório pós-passeio, região exclusiva Higienópolis).
5. **Diferenciais** — bloco com ícones: morador da região, experiência com cães, atenção total, comunicação direta pelo WhatsApp.
6. **Como funciona** — 3 passos: 1) chama no WhatsApp 2) combina rotina 3) cachorro feliz.
7. **Benefícios para o cachorro** — lista visual (saúde, socialização, gasto de energia, rotina).
8. **FAQ** — accordion com 5–6 perguntas (preço, raças, chuva, chaves, seguro, horários).
9. **CTA final** — bloco roxo grande com "Vamos combinar o primeiro passeio?" + botão laranja.
10. **Footer** — região de atendimento, WhatsApp, ano.
11. **Botão WhatsApp flutuante** — canto inferior direito, sempre visível.

Todos os botões e o flutuante apontam para:
`https://wa.me/5511990267029?text=Oi%20vim%20pelo%20site%20e%20quero%20saber%20sobre%20dog%20walker`

### Design system

- Cores: primária `#5B3CC4`, secundária `#3A2A8F`, destaque `#FF7A00`, fundo `#FFFFFF`, neutro `#F5F5F7`.
- Tipografia: Poppins (títulos), Inter (texto) — via Google Fonts.
- Estilo: cantos arredondados generosos, bastante espaço em branco, ícones lineares (lucide-react), sombras suaves.
- Mobile-first; CTA laranja sempre acessível (header + flutuante).

### Imagens

Placeholders cinza com ícone (sem stock genérico de banco de imagens). Substituição por fotos reais fica para etapa futura, quando você enviar.

### Integrações nesta entrega

- Botão WhatsApp flutuante e CTAs com link pré-preenchido.
- Google Analytics e Google Maps **não** entram agora (adicionados depois com seus IDs).

### Detalhes técnicos

- Tudo em `src/routes/index.tsx` + componentes em `src/components/landing/` (Hero, Problem, Solution, Differentials, HowItWorks, Benefits, FAQ, FinalCTA, Footer, WhatsAppFloat, Header).
- Tokens de cor adicionados em `src/styles.css` (variáveis oklch para primary/accent) e fontes importadas no `__root.tsx`.
- `head()` da rota com title, description e OG tags em PT-BR para SEO.
- FAQ usa `components/ui/accordion`; botões usam `components/ui/button` com variante laranja.
- Rolagem suave via `scroll-behavior: smooth` no html.
