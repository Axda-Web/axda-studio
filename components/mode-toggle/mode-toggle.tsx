"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  positionAbsolute?: boolean;
}

export function ModeToggle({ positionAbsolute = false }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={cn("rounded-full", {
        "md:absolute md:right-4 md:bottom-4": positionAbsolute,
      })}
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" || theme === undefined ? (
        <Moon
          data-testid="moon-icon"
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
      ) : (
        <Sun
          data-testid="sun-icon"
          className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

// TODO: Moon icon not visible in dark mode
