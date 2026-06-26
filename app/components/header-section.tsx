import { twMerge } from "tailwind-merge";

export default function HeaderSection({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return (
    <div
      className={twMerge(
        "flex items-baseline justify-baseline gap-4 py-6",
        className,
      )}
    >
      <h2 className="text-4xl font-black">{title}.</h2>
      <div className="h-0.5 w-full rounded-full bg-zinc-400"></div>
    </div>
  );
}
