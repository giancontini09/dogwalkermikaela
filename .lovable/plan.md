## Objetivo
Alinhar a landing existente ao mockup enviado ("Passeios com Cuidado — Dog Walker"), mantendo a paleta roxo + laranja, tipografia Poppins/Inter e CTAs para WhatsApp.

## Mudanças por seção

### Header
- Renomear marca para **"Passeios com Cuidado"** com sublinha "DOG WALKER".
- Adicionar nav desktop: Início, Sobre, Como funciona, Depoimentos, Perguntas, Contato (links âncora com scroll suave; colapsa no mobile).
- Manter botão laranja "Falar no WhatsApp" à direita.

### Hero
- Badge "DOG WALKER EM HIGIENÓPOLIS".
- Título em 4 linhas como no mockup: "Passeios seguros e cheios de carinho para o seu cachorro em Higienópolis" (com "cheios de carinho" em roxo).
- Subtítulo curto + CTA laranja "Falar no WhatsApp" + selo "Atendimento em Higienópolis e bairros próximos".
- Lado direito: card com placeholder de foto (proporção retrato), com formas orgânicas roxas/laranjas atrás (blobs decorativos) — sem foto real ainda.

### Problem (rotina)
- Reformatar para layout assimétrico: bloco de texto à esquerda + 3 colunas finas à direita com ícone roxo e descrição curta (tempo / tédio / segurança), separadas por linhas verticais sutis — como na referência.

### Solution → "Passeios personalizados com foco em segurança e bem-estar"
- 4 cards brancos em grid (Passeios individuais, Região Higienópolis, Rotina com responsabilidade, Relatórios do passeio).
- Ícones em círculos alternando roxo/laranja sólido com ícone branco (não fundo translúcido).

### Differentials → "Meu diferencial" (faixa roxa)
- Substituir grid atual por seção full-width com fundo roxo, foto à esquerda em moldura arredondada, título "Profissionalismo que traz tranquilidade para você" + subtítulo, e 3 "chips" brancos com ícone (Cursos e capacitações, Estudos em comportamento, Amor e paciência).

### Benefits → "Benefícios para o seu cachorro e para você"
- Mudar para fileira horizontal de 5 itens com ícones de linha (saúde, calma, segurança, tranquilidade, estímulos), texto curto centralizado, sem cards.

### HowItWorks
- Expandir para 4 passos numerados (1 WhatsApp → 2 Entendemos a rotina → 3 Agendamos → 4 Você acompanha) com setas entre eles, ícones em círculo laranja/roxo alternando.

### Nova seção: Depoimentos
- Título "O que os clientes dizem" + 3 cards brancos com aspas roxas, texto, avatar placeholder e nome (Juliana M., Rafael S., Camila T.).

### Final CTA
- Manter, mas ajustar para faixa horizontal laranja com texto à esquerda e botão branco à direita, conforme mockup.

### FAQ
- Manter accordion, mas em grid 2 colunas no desktop com 6 perguntas (em quais bairros, duração, individuais, cachorro agitado, segurança, pagamento).

### Footer
- Reestruturar em 4 colunas: marca + descrição + ícones sociais; **Atendimento** (Higienópolis e bairros próximos + lista: Santa Cecília, Consolação, Perdizes, Pacaembu, Bela Vista, Sumaré); **Contato** (WhatsApp, e-mail placeholder, Instagram); decoração de patinha à direita + frase "Seu cachorro merece o melhor passeio!".
- Copyright centralizado no rodapé.

## Detalhes técnicos
- Sem novas dependências; só `lucide-react` já presente.
- Continuar usando tokens semânticos (`primary`, `accent`, `muted`, `card`, `foreground`) — sem hex hardcoded em componentes.
- Adicionar gradiente/blobs decorativos via `::before`/divs absolutas com `bg-primary/20 blur-3xl` para o hero.
- Novo componente `src/components/landing/Testimonials.tsx`; demais arquivos editados in-place.
- Âncoras: `#inicio`, `#sobre` (Differentials), `#como-funciona`, `#depoimentos`, `#perguntas`, `#contato` (footer).
- Mobile-first preservado; nav vira menu hambúrguer simples (sheet do shadcn ou disclosure leve).
- Imagens permanecem placeholders (blocos com gradiente + ícone).