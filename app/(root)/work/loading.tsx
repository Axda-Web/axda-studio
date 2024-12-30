import { PageTitle } from "@/components/page-title";
import { cn } from "@/lib/utils";

export default function WorkLoadingPage() {
  return (
    <div className="mb-6">
      <PageTitle title="WORK" />
      <div className="py-8">
        <div
          className={cn(
            "grid grid-cols-1 gap-4",
            "md:grid-cols-2",
            "lg:grid-cols-3"
          )}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
              <div>
                <div
                  className={cn(
                    "block w-full max-w-[735px] max-h-[735px] aspect-square animate-pulse bg-slate-300",
                    "md:max-w-[440px] md:max-h-[440px]",
                    "lg:max-w-[416px] lg:max-h-[416px]"
                  )}
                />
                <div className="flex justify-between items-center py-2">
                  <div className="w-32 h-7 rounded-lg bg-slate-200 animate-pulse"></div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
