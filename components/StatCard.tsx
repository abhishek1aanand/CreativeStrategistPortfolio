import type { StatCardData } from "@/lib/content";

export default function StatCard({ label, value, sublabel }: StatCardData) {
  return (
    <div className="border border-black/10 border-t-4 border-t-gold bg-white px-5 py-5 sm:px-6 sm:py-6">
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray">
        {label}
      </p>
      <p className="mt-2 font-sans text-3xl sm:text-4xl font-extrabold leading-none text-black">
        {value}
      </p>
      <p className="mt-2 text-sm text-gray">{sublabel}</p>
    </div>
  );
}
