import { MarketplaceHeader } from "@/components/marketplace/header"
import { MarketplaceFilters } from "@/components/marketplace/filters"
import { JobGrid } from "@/components/marketplace/job-grid"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketplaceHeader />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Job Marketplace</h1>
          <p className="mt-2 text-muted-foreground">Discover verified opportunities from trusted clients</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <MarketplaceFilters />
          </aside>

          <div className="lg:col-span-3">
            <JobGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
