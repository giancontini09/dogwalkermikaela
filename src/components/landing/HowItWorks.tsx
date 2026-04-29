const steps = [
  { n: "1", title: "Chama no WhatsApp", text: "Conta um pouco do seu cachorro e da sua rotina." },
  { n: "2", title: "Combinamos a rotina", text: "Definimos dias, horários e duração ideal dos passeios." },
  { n: "3", title: "Cachorro feliz", text: "Você recebe relatório com foto a cada passeio." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[Poppins] text-3xl font-bold text-foreground md:text-4xl">
            Simples assim
          </h2>
          <p className="mt-4 text-muted-foreground">Começamos hoje mesmo.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-3xl bg-card p-8 shadow-sm">
              <div className="font-[Poppins] text-5xl font-bold text-primary/20">{s.n}</div>
              <h3 className="mt-2 font-[Poppins] text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
