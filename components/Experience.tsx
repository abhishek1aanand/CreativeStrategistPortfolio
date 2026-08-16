import { experience } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            Professional Experience
          </h2>
        </RevealOnScroll>

        <div className="mt-10 flex flex-col gap-12 sm:mt-14">
          {experience.map((entry) => (
            <RevealOnScroll key={entry.role + entry.org}>
              <div className="border-t border-black/10 pt-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-sans text-xl font-bold text-black sm:text-2xl">
                    {entry.role} — {entry.org}
                  </h3>
                  <p className="text-sm font-semibold text-gray">{entry.dates}</p>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-base leading-relaxed text-gray">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
