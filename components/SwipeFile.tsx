import { swipeFile } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function SwipeFile() {
  return (
    <section id="swipe-file" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-black sm:text-4xl">
            Swipe File
          </h2>
          <p className="mt-3 text-base text-gray sm:text-lg">
            A sample of work across clients and formats.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {swipeFile.map((item, i) => (
            <RevealOnScroll key={`${item.type}-${item.client}-${i}`} delay={(i % 3) * 75}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between border border-black/10 p-6 transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div>
                  <p className="font-sans text-lg font-bold text-black">{item.type}</p>
                  <p className="mt-1 text-sm text-gray">{item.client}</p>
                </div>
                <p className="mt-6 text-sm font-bold text-gold">
                  Read Full Doc <span aria-hidden="true">→</span>
                </p>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
