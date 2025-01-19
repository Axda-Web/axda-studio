import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";

// TODO: Increase the max width of the global container
// TODO: Center verticaly the main content of each page?

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "min-h-[calc(100vh-48.5px)] flex flex-col max-w-7xl mx-auto p-4",
        "md:px-16 md:py-0",
        "xl:px-0"
      )}
    >
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
