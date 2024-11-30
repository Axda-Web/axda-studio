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

import { NavItems } from "@/components/nav-items";
import { AxdaStudioLogo } from "./axda-studio-logo";
import { ModeToggle } from "./mode-toggle";

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
          <SheetFooter className="flex flex-row justify-between items-center">
            <SheetClose asChild>
              <AxdaStudioLogo />
            </SheetClose>
            <ModeToggle />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
