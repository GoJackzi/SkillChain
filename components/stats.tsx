export function Stats() {
  const stats = [
    { value: "50K+", label: "Verified Freelancers" },
    { value: "$12M+", label: "Total Value Locked" },
    { value: "98%", label: "Project Success Rate" },
    { value: "24h", label: "Avg. Verification Time" },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
