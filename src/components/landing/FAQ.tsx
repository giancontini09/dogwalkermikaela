import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Em quais bairros você atende?",
    a: "Atendo principalmente Higienópolis e bairros próximos como Santa Cecília, Consolação, Perdizes, Pacaembu, Bela Vista e Sumaré.",
  },
  {
    q: "Quanto tempo dura cada passeio?",
    a: "Os passeios duram entre 30 e 60 minutos, conforme a necessidade e energia do seu cachorro.",
  },
  {
    q: "Os passeios são individuais?",
    a: "Sim. O padrão é individual. Quando há cães compatíveis, podem sair em duplas — sempre com seu consentimento.",
  },
  {
    q: "E se meu cachorro for muito agitado?",
    a: "Sem problema. Faço uma apresentação calma e respeito o tempo dele. Tenho experiência com cães ansiosos e cheios de energia.",
  },
  {
    q: "Como é feita a segurança durante os passeios?",
    a: "Uso guias e peitorais adequados, escolho rotas seguras e monitoro o comportamento dele a cada momento.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Combinamos pacotes semanais ou mensais. Pagamento via Pix, com flexibilidade conforme a sua rotina.",
  },
];

export function FAQ() {
  return (
    <section id="perguntas" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-primary md:text-4xl">
            Perguntas <span className="text-accent">frequentes</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-8 md:grid-cols-2">
          {[0, 1].map((col) => (
            <Accordion key={col} type="single" collapsible className="w-full">
              {faqs
                .filter((_, i) => i % 2 === col)
                .map((f) => (
                  <AccordionItem
                    key={f.q}
                    value={f.q}
                    className="my-2 rounded-2xl border border-border bg-card px-4"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
