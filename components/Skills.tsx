import { skillGroups } from "@/lib/content";
import Pill from "./Pill";
import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            Core Skills
          </h2>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <RevealOnScroll key={group.label} delay={(i % 2) * 100}>
              <h3 className="font-sans text-base font-bold uppercase tracking-wide text-black">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Pill key={skill} label={skill} />
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
