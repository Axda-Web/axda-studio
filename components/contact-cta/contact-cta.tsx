"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { URLS } from "@/constants/nav";

interface ContactCtaProps {
  className?: string;
}

export function ContactCta({ className }: ContactCtaProps) {
  const pathname = usePathname();

  return (
    <Button
      data-testid="contact-cta"
      asChild
      className={cn(
        "rounded-full text-base bg-foreground hover:bg-foreground/90",
        {
          "bg-transparent text-foreground border border-foreground hover:bg-transparent hover:text-foreground hover:border-foreground hover:cursor-s-resize":
            pathname === URLS.CONTACT,
        },
        className
      )}
      size="lg"
    >
      <Link href={URLS.CONTACT}>CONTACT</Link>
    </Button>
  );
}
