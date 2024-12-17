"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

import { MENU_ITEMS } from "@/constants/nav";

interface NavItemsProps {
  inSheet?: boolean;
}

export function NavItems({ inSheet }: NavItemsProps) {
  const pathname = usePathname();

  const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
    if (inSheet) {
      return <SheetClose asChild>{children}</SheetClose>;
    }
    return <>{children}</>;
  };

  return (
    <ul
      className={cn(
        "flex flex-col gap-y-6 text-xl items-start text-red-500",
        "md:flex-row md:gap-x-12 md:items-center"
      )}
    >
      {MENU_ITEMS.map(({ label, href }) => (
        <li key={label}>
          <LinkWrapper>
            <Link
              href={href}
              className="group relative"
              data-testid="nav-item-link"
            >
              {label}{" "}
              <span
                className={`h-px inline-block bg-foreground absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 ${
                  pathname === href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          </LinkWrapper>
        </li>
      ))}
    </ul>
  );
}
