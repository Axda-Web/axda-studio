import { cn } from "@/lib/utils";

import { NavItems } from "@/components/nav-items/nav-items";
import { AxdaStudioLogo } from "../axda-studio-logo";
import { MobileNav } from "../mobile-nav";
import { ContactCta } from "@/components/contact-cta";

export function Navbar() {
  return (
    <nav className={cn("flex justify-between items-center", "md:mt-6")}>
      <AxdaStudioLogo />
      <div className={cn("hidden", "md:block")}>
        <NavItems />
      </div>
      <ContactCta className={cn("hidden", "md:flex")} />
      <div className={cn("block", "md:hidden")}>
        <MobileNav />
      </div>
    </nav>
  );
}

// TODO: Adjust logo size
