import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("p-4 max-w-7xl mx-auto", "md:px-16", "xl:px-0")}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
