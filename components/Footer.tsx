import { footer, links, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
        <p className="max-w-2xl font-sans text-2xl font-extrabold leading-tight text-black sm:text-3xl">
          {footer.closingLine}
        </p>

        <div className="mt-8 flex flex-col gap-2 text-base text-gray sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
          <a
            href={`mailto:${links.email}`}
            className="transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {links.email}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            LinkedIn
          </a>
          <span>{links.phone}</span>
          <span>{footer.location}</span>
        </div>

        <p className="mt-10 text-sm text-gray">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
