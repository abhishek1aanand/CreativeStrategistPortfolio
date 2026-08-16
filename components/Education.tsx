import { education } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            {education.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2">
            <div>
              <h3 className="font-sans text-lg font-bold text-black">
                {education.degree.title}
              </h3>
              <p className="mt-1 text-base text-gray">{education.degree.org}</p>
              <p className="mt-1 text-base text-gray">{education.degree.detail}</p>
            </div>

            <div>
              <h3 className="font-sans text-lg font-bold text-black">Certifications</h3>
              <ul className="mt-2 flex flex-col gap-1.5">
                {education.certifications.map((cert) => (
                  <li key={cert} className="text-base text-gray">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray">
            {education.trainingNote}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
