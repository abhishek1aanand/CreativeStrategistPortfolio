import { hero } from "@/lib/content";
import StatCard from "./StatCard";
import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
      <RevealOnScroll>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray">
          {hero.eyebrow}
        </p>

        <h1 className="mt-5 font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
          {hero.headlineLines.map((line, i) =>
            typeof line === "string" ? (
              <span key={i} className="block">
                {line}
              </span>
            ) : (
              <span key={i} className="block text-gold">
                {line.text}
              </span>
            )
          )}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black sm:text-xl">
          {hero.subhead}
        </p>

        <p className="mt-4 text-sm font-medium text-gray sm:text-base">{hero.meta}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className={
                cta.kind === "outline"
                  ? "rounded-md border border-black px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  : "rounded-md px-5 py-2.5 text-sm font-semibold text-black underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={150} className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3">
        {hero.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </RevealOnScroll>
    </section>
  );
}
