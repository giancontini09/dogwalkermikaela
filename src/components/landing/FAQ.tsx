import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto custa um passeio?",
    a: "O valor depende da duração e da frequência semanal. Me chama no WhatsApp que monto um plano sob medida.",
  },
  {
    q: "Atende todas as raças e portes?",
    a: "Sim — de filhotes socializados a cães idosos, pequenos, médios e grandes. Avalio caso a caso.",
  },
  {
    q: "E se chover?",
    a: "Em chuva forte, reagendo o passeio ou faço uma atividade leve dentro do prédio, combinado com você.",
  },
  {
    q: "Como pego o cachorro? Preciso deixar chave?",
    a: "Combinamos com a portaria do prédio ou recebo a chave/cópia com total responsabilidade e discrição.",
  },
  {
    q: "Quantos cachorros andam juntos?",
    a: "Grupos pequenos e cuidadosamente formados. Se o seu prefere passeio individual, sem problema.",
  },
  {
    q: "Em quais horários você atende?",
    a: "Manhã, tarde e início da noite, de segunda a sábado. Confirmamos a janela ideal pelo WhatsApp.",
  },
];

export function FAQ() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 rounded-3xl bg-card p-2 shadow-sm">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="px-4">
              <AccordionTrigger className="text-left font-[Poppins] text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
