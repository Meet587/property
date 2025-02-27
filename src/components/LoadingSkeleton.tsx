import { Skeleton } from "@/components/ui/skeleton";

export function PropertyCardSkeleton() {
    return (
      <div className="rounded-lg overflow-hidden shadow-sm border">
        <Skeleton className="h-60 w-full" />
        <div className="p-4 space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    );
  }