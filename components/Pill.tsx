export default function Pill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-black/15 bg-white px-4 py-1.5 text-sm font-medium text-black">
      {label}
    </span>
  );
}
