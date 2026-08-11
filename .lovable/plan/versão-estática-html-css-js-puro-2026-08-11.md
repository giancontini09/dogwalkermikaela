# Versão estática (HTML + CSS + JS puro)

Objetivo: gerar uma cópia autônoma da landing page dentro de `public_html/`, pronta para subir em qualquer hospedagem compartilhada (cPanel, FTP), sem React, sem Vite, sem build.

## O que será criado

```text
public_html/
  index.html      -> todas as seções da landing em HTML semântico
  styles.css      -> design system (roxo #5B3CC4, laranja #FF7A00) em CSS puro
  script.js       -> menu mobile, FAQ acordeão, scroll suave
```

## Conteúdo

- Header fixo com marca "Passeios com Cuidado / DOG WALKER", navegação (Início, Sobre, Como funciona, Depoimentos, Perguntas, Contato) e botão WhatsApp.
- Hero, Problema, Solução, faixa "Meu diferencial", Benefícios (5 itens), Como funciona (4 passos), Depoimentos, CTA laranja, FAQ em 2 colunas, Footer em 4 colunas.
- Botão flutuante do WhatsApp, todos os CTAs apontando para o mesmo link `wa.me/5511990267029` com a mensagem pré-preenchida.
- SEO: `<title>`, meta description, Open Graph/Twitter, JSON-LD LocalBusiness, `lang="pt-BR"`, viewport responsivo.

## Detalhes técnicos

- Ícones Lucide substituídos por SVGs inline (sem dependência de CDN de ícones).
- Fontes Poppins/Inter via `<link>` do Google Fonts; fallback de sistema caso offline.
- CSS escrito à mão com variáveis CSS equivalentes aos tokens atuais e media queries mobile-first (sem Tailwind).
- JavaScript: ~40 linhas, vanilla, sem dependências — toggle do menu, acordeão do FAQ (um aberto por vez), scroll suave nas âncoras.
- Nenhum arquivo do app React é alterado; a versão estática vive isolada em `public_html/`.

## Fora do escopo

- Google Analytics e Google Maps ficam de fora, a menos que você queira (posso incluir o snippet do GA se me passar o ID de medição).
