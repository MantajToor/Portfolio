import { cn } from "@/lib/utils";

export const navbarStyles = {
  nav: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  navScrolled: "bg-[#0f0f1e]/95 backdrop-blur-sm pixel-border-b",
  navTransparent: "bg-transparent",
  container: "max-w-7xl mx-auto px-4 py-4",
  content: "flex items-center justify-between",
  logo: "text-xl font-bold text-pixel-blue pixel-border bg-pixel-dark px-3 py-1 font-mono",
  navLinks: "hidden md:flex gap-4",
  navLink: "pixel-border bg-pixel-dark px-4 py-2 text-white hover:text-pixel-blue hover:bg-[#1a1a2e] transition-colors font-bold text-sm font-mono",
} as const;

export const getNavClassName = (scrolled: boolean) => {
  return cn(
    navbarStyles.nav,
    scrolled ? navbarStyles.navScrolled : navbarStyles.navTransparent
  );
};

export const getNavStyle = (scrolled: boolean) => {
  return scrolled ? { borderBottom: "4px solid #333" } : {};
};

