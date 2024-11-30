import { cn } from "@/lib/utils";

import { NavItems } from "@/components/nav-items";
import { AxdaStudioLogo } from "./axda-studio-logo";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <nav
      className={cn("flex justify-between items-center", "md:mt-6", "lg:mt-8")}
    >
      <AxdaStudioLogo />
      <div className={cn("hidden", "md:block")}>
        <NavItems />
      </div>
      <div className={cn("block", "md:hidden")}>
        <MobileNav />
      </div>
    </nav>
  );
}
