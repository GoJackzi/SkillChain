'use client'

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Briefcase, DollarSign, Star } from "lucide-react"
import { useUserProfile } from "@/hooks/useUserProfile"
import { useUserSkills } from "@/hooks/useUserSkills"

export function StatsCards() {
  const { reputation } = useUserProfile()
  const { verifiedSkills } = useUserSkills()
  
  const completedJobs = reputation?.completedJobs || 0
  const reputationScore = reputation?.averageRating || '0.0'
  const totalEarnings = completedJobs * 2000 // Est. $2k per job
  
  // Get applied jobs from localStorage
  const appliedJobsCount = typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('appliedJobs') || '[]').length 
    : 0
  
  const stats = [
    {
      label: "Reputation Score",
      value: reputationScore,
      change: `${completedJobs} jobs completed`,
      icon: Star,
      trend: "up",
    },
    {
      label: "Active Projects",
      value: "0",
      change: `${appliedJobsCount} applications sent`,
      icon: Briefcase,
      trend: "neutral",
    },
    {
      label: "Total Earnings",
      value: `$${totalEarnings.toLocaleString()}`,
      change: `From ${completedJobs} completed jobs`,
      icon: DollarSign,
      trend: "up",
    },
    {
      label: "Skills Verified",
      value: verifiedSkills.toString(),
      change: "On Fluent blockchain",
      icon: TrendingUp,
      trend: "up",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className={`mt-2 text-xs ${stat.trend === "up" ? "text-accent" : "text-muted-foreground"}`}>
                {stat.change}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
