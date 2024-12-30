import { cn } from "@/lib/utils";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <h1
      className={cn(
        "text-5xl font-bold after:content-[''] after:block after:w-full after:h-0.5 after:bg-foreground after:mt-4 mt-10",
        "md:text-7xl",
        "lg:text-9xl lg:mt-16"
      )}
    >
      {title}
    </h1>
  );
}
