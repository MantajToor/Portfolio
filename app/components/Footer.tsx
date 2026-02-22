import { personalInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t-[3px] border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
        <p className="font-pixel text-[8px] text-text-muted">
          Built by {personalInfo.name}
        </p>
        <p className="font-pixel text-[7px] text-text-muted/40">
          © {new Date().getFullYear()} · NEXT.JS & TAILWIND CSS
        </p>
        <div className="flex gap-1 mt-1">
          <span className="w-2 h-2 bg-gold/30" />
          <span className="w-2 h-2 bg-gold/20" />
          <span className="w-2 h-2 bg-gold/10" />
        </div>
      </div>
    </footer>
  );
}
