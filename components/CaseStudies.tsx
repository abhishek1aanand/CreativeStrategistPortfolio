import { caseStudies } from "@/lib/content";
import StatCard from "./StatCard";
import RevealOnScroll from "./RevealOnScroll";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            Key Performance Results
          </h2>
        </RevealOnScroll>

        <div className="mt-10 flex flex-col gap-16 sm:mt-14 sm:gap-20">
          {caseStudies.map((study) => (
            <RevealOnScroll key={study.id}>
              <article className="border-t border-black/10 pt-8 sm:pt-10">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
                  {study.kicker}
                </p>
                <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                  {study.headline}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray sm:text-lg">
                  {study.narrative}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {study.stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                  ))}
                </div>

                {study.note && (
                  <p className="mt-5 text-sm italic text-gray">{study.note}</p>
                )}
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
