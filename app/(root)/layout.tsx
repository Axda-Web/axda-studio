import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col max-w-7xl mx-auto p-4",
        "md:px-16",
        "xl:px-0"
      )}
    >
      <Navbar />
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}
