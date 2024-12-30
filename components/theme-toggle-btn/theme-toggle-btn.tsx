"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleBtnProps {
  fillColor: "foreground" | "background";
}

export function ThemeToggleBtn({ fillColor }: ThemeToggleBtnProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="🔍-Product-Icons"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            className={cn({
              "fill-background": fillColor === "background",
              "fill-foreground": fillColor === "foreground",
            })}
            id="ic_fluent_dark_theme_24_regular"
          >
            <path
              d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
              id="🎨-Color"
            ></path>
          </g>
        </g>
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

// TODO: Moon icon not visible in dark mode
