'use client'

import { DashboardHeader } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { SkillProgress } from "@/components/dashboard/skill-progress"
import { JobFeed } from "@/components/dashboard/job-feed"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { useAccount } from "wagmi"
import { Card } from "@/components/ui/card"
import { Wallet } from "lucide-react"
import React from "react"

export default function DashboardPage() {
  const { address, isConnected } = useAccount()
  
  // Get profile name from localStorage
  const [displayName, setDisplayName] = React.useState('')
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedName = localStorage.getItem('profileName') || ''
      if (savedName) {
        setDisplayName(savedName)
      } else if (address) {
        setDisplayName(`${address.slice(0, 6)}...${address.slice(-4)}`)
      }
    }
  }, [address])
  
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Card className="p-12 text-center">
            <Wallet className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Connect Your Wallet</h2>
            <p className="mt-2 text-muted-foreground">
              Please connect your wallet to view your dashboard
            </p>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {displayName || 'Freelancer'}</h1>
          <p className="mt-2 text-muted-foreground">Here's what's happening with your projects today</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <StatsCards />
            <JobFeed />
          </div>

          <div className="space-y-6">
            <SkillProgress />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}
