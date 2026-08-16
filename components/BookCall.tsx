import Script from "next/script";
import { bookCall, links } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function BookCall() {
  return (
    <section id="book-call" className="border-t border-black/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-8 sm:py-24">
        <RevealOnScroll>
          <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            {bookCall.heading}
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">{bookCall.subtext}</p>

          <a
            href={links.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-gold px-8 py-4 text-base font-bold text-black transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {bookCall.ctaLabel}
          </a>

          {/*
            Progressive enhancement: Calendly's inline widget below the
            button above. The button remains the guaranteed-to-work
            fallback if the external widget script fails to load.
          */}
          <div className="mt-12 overflow-hidden rounded-lg bg-white">
            <div
              className="calendly-inline-widget"
              data-url={links.calendly}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
