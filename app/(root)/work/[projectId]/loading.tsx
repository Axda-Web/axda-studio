import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectPageLoading() {
  return (
    <div
      className={cn(
        "mb-10 mt-10 flex flex-col gap-y-8 items-center",
        "xl:flex-row xl:mt-16 xl:gap-y-0 xl:gap-x-20"
      )}
    >
      <div
        className={cn(
          "overflow-hidden w-full",
          "xl:flex-1 xl:max-h-[550px] xl:max-w-[550px]"
        )}
      >
        <Skeleton className={cn("block aspect-square", "md:hidden")} />
        <Skeleton
          className={cn("hidden aspect-square", "md:block", "xl:hidden")}
        />
        <Skeleton
          className={cn(
            "hidden aspect-square",
            "xl:block xl:h-[550px] xl:aspect-square"
          )}
        />
      </div>
      <div
        className={cn(
          "space-y-8 w-full",
          "xl:flex-1 xl:self-stretch xl:justify-between xl:flex xl:flex-col xl:gap-y-8"
        )}
      >
        <div className={cn("space-y-4")}>
          <div className={cn("flex justify-between items-baseline")}>
            <Skeleton
              className={cn("h-12 w-48", "md:h-24 md:w-80", "xl:h-28 xl:w-80")}
            />
            <Skeleton className={cn("h-6 w-28")} />
          </div>
          <div className={cn("flex flex-wrap gap-2")}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className={cn("h-6 w-24")} />
            ))}
          </div>
          <Skeleton className={cn("w-full h-60")} />
        </div>
        <div className={cn("flex items-center gap-x-4")}>
          <Skeleton className={cn("rounded-full w-40 h-10", "md:w-48")} />
          <Skeleton className={cn("rounded-full w-40 h-10", "md:w-48")} />
        </div>
      </div>
    </div>
  );
}
