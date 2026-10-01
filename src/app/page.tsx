const areas = [
  {
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, cobranças e questões imobiliárias, com foco em soluções seguras e duradouras.",
  },
  {
    title: "Direito Empresarial",
    description:
      "Assessoria societária, contratos comerciais e consultoria preventiva para empresas de todos os portes.",
  },
  {
    title: "Direito Trabalhista",
    description:
      "Atuação consultiva e contenciosa para empregadores e empregados, sempre buscando o equilíbrio das relações.",
  },
  {
    title: "Família e Sucessões",
    description:
      "Divórcios, guarda, inventários e planejamento sucessório conduzidos com discrição e sensibilidade.",
  },
];

const steps = [
  {
    title: "Escuta",
    description: "Entendemos o seu caso por completo antes de qualquer recomendação.",
  },
  {
    title: "Estratégia",
    description: "Apresentamos caminhos possíveis, riscos e custos com total clareza.",
  },
  {
    title: "Acompanhamento",
    description: "Você é informado de cada etapa, sem linguagem desnecessariamente técnica.",
  },
];

export default function Home() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="font-serif text-2xl tracking-tight">
            Valente <span className="text-accent">&amp;</span> Moraes
          </a>
          <nav className="hidden gap-10 text-sm text-muted md:flex">
            <a href="#atuacao" className="transition-colors hover:text-foreground">
              Atuação
            </a>
            <a href="#escritorio" className="transition-colors hover:text-foreground">
              Escritório
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground">
              Contato
            </a>
          </nav>
          <a
            href="#contato"
            className="border border-foreground px-5 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-40">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">
            Advocacia desde 2008
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Clareza jurídica para <em className="text-accent">decisões</em> que
            importam.
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted">
            Orientação jurídica próxima, objetiva e transparente para pessoas e
            empresas — do aconselhamento preventivo à defesa nos tribunais.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="#contato"
              className="bg-foreground px-8 py-4 text-center text-sm text-background transition-opacity hover:opacity-85"
            >
              Fale com um advogado
            </a>
            <a
              href="#atuacao"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Conheça nossas áreas →
            </a>
          </div>
        </section>

        {/* Áreas de atuação */}
        <section id="atuacao" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
                  Áreas de atuação
                </p>
                <h2 className="font-serif text-4xl leading-tight tracking-tight">
                  Especialização com visão do todo.
                </h2>
              </div>
              <ul className="divide-y divide-line border-y border-line">
                {areas.map((area, i) => (
                  <li key={area.title} className="grid gap-2 py-8 sm:grid-cols-[3rem_1fr]">
                    <span className="font-serif text-lg text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl">{area.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted">{area.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Escritório */}
        <section id="escritorio" className="bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#c9ad7a]">
              O escritório
            </p>
            <blockquote className="max-w-4xl font-serif text-3xl leading-snug md:text-5xl">
              “Acreditamos que um bom advogado é aquele que explica com
              simplicidade e age com rigor.”
            </blockquote>
            <div className="mt-20 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title}>
                  <h3 className="font-serif text-2xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
                Contato
              </p>
              <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Vamos conversar sobre o seu caso.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                A primeira conversa serve para entendermos a sua situação e
                indicarmos o melhor caminho. Respondemos em até um dia útil.
              </p>
            </div>
            <dl className="divide-y divide-line border-y border-line self-start">
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:justify-between">
                <dt className="text-sm text-muted">Telefone</dt>
                <dd>
                  <a href="tel:+551100000000" className="hover:text-accent">
                    (11) 0000-0000
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:justify-between">
                <dt className="text-sm text-muted">E-mail</dt>
                <dd>
                  <a href="mailto:contato@exemplo.com.br" className="hover:text-accent">
                    contato@exemplo.com.br
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:justify-between">
                <dt className="text-sm text-muted">Endereço</dt>
                <dd className="sm:text-right">
                  Av. Paulista, 0000 — Sala 00
                  <br />
                  São Paulo, SP
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:justify-between">
                <dt className="text-sm text-muted">Atendimento</dt>
                <dd>Seg. a sex., 9h às 18h</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Valente &amp; Moraes Advocacia. Todos os direitos reservados.</p>
          <p>OAB/SP 00.000</p>
        </div>
      </footer>
    </>
  );
}
