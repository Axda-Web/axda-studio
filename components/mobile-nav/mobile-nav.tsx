import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { NavItems } from "@/components/nav-items/nav-items";
import { ContactCta } from "@/components/contact-cta";
import { ThemeToggleBtn } from "../theme-toggle-btn";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={48} />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-knewave text-2xl text-left mb-8">
            Axda Studio
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col justify-between">
          <NavItems inSheet />
          <SheetFooter
            className={cn(
              "flex flex-row justify-between items-center",
              "sm:justify-between"
            )}
          >
            <SheetClose asChild>
              <ContactCta />
            </SheetClose>
            <ThemeToggleBtn fillColor="foreground" />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// TODO: FIX change viewport size when sheet is open bug
// TODO: Fix close align close button to brand name on mobile
// TODO: Fix contact cta sheet close
