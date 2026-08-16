import { process } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Process() {
  return (
    <section id="process" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            {process.heading}
          </h2>
          <p className="mt-3 text-base text-gray sm:text-lg">{process.subheading}</p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={(i % 4) * 75}>
              <div className="h-full border border-black/10 p-5">
                <p className="font-sans text-2xl font-extrabold text-gold">{step.number}</p>
                <h3 className="mt-2 font-sans text-lg font-bold text-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
