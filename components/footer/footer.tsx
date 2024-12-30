import { cn } from "@/lib/utils";

import { ThemeToggleBtn } from "@/components/theme-toggle-btn";

export function Footer() {
  return (
    <footer className="py-3 bg-foreground px-4">
      <div
        className={cn("flex items-center justify-between max-w-7xl mx-auto")}
      >
        <div className="text-background">
          <span>© </span>
          <span className="font-bold">{new Date().getFullYear()} | </span>
          <span className={cn("font-knewave text-lg")}>Axda Studio</span>
        </div>
        <ThemeToggleBtn fillColor="background" />
      </div>
    </footer>
  );
}

// TODO: Adjust text centering on different screen sizes
// TODO: Add social links
// TODO: Add privacy policy link
// TODO: Add terms of service link
