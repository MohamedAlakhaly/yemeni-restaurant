import { Skeleton } from "@/components/ui/skeleton"

export default function ProductSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden border bg-card">
      {/* Image skeleton */}
      <Skeleton className="h-48 w-full" />

      {/* Content skeleton */}
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/2 mb-2" />
        <Skeleton className="h-4 w-1/4 mb-3" />

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-9 w-20 rounded-full" />
        </div>
      </div>
    </div>
  )
}
