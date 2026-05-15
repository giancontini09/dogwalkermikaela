import { GraduationCap, Award, Heart, PawPrint } from "lucide-react";

const chips = [
  { icon: GraduationCap, label: "Cursos e capacitações na área pet" },
  { icon: Award, label: "Estudos em comportamento e linguagem canina" },
  { icon: Heart, label: "Amor, paciência e muita experiência" },
];

export function Differentials() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
      <div className="absolute -right-10 top-10 opacity-10">
        <PawPrint size={120} />
      </div>
      <div className="absolute -left-10 bottom-10 opacity-10">
        <PawPrint size={140} />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent/40 to-primary-foreground/10 shadow-xl">
            <div className="flex h-full w-full items-center justify-center">
              <PawPrint className="text-primary-foreground/40" size={120} />
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-[11px] font-semibold tracking-[0.18em]">
            <PawPrint size={14} /> MEU DIFERENCIAL
          </span>
          <h2 className="mt-4 font-[Poppins] text-3xl font-bold leading-tight md:text-4xl">
            Profissionalismo que traz tranquilidade para você
          </h2>
          <p className="mt-4 max-w-lg text-primary-foreground/80">
            Não sou apenas um passeador. Sou um profissional capacitado para cuidar do seu cachorro
            com conhecimento e responsabilidade.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {chips.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-medium text-primary-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
