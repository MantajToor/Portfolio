import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "")}>
      <span className="font-pixel text-[10px] text-gold tracking-widest">
        {number}
      </span>
      <h2 className="font-pixel text-base sm:text-lg md:text-xl mt-2 text-text-primary leading-relaxed">
        {title}
      </h2>
      {/* Decorative pixel divider */}
      <div
        className={cn(
          "flex gap-1 mt-4",
          align === "center" && "justify-center",
        )}
      >
        <span className="block w-3 h-3 bg-gold" />
        <span className="block w-3 h-3 bg-gold/60" />
        <span className="block w-3 h-3 bg-gold/30" />
      </div>
    </div>
  );
}
