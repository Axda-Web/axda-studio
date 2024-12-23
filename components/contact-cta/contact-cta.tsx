import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { URLS } from "@/constants/nav";

interface ContactCtaProps {
  className?: string;
}

export function ContactCta({ className }: ContactCtaProps) {
  return (
    <Button
      data-testid="contact-cta"
      asChild
      className={cn("rounded-full text-base", className)}
      size="lg"
    >
      <Link href={URLS.CONTACT}>CONTACT</Link>
    </Button>
  );
}
