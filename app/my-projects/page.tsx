'use client'

import { DashboardHeader } from "@/components/dashboard/header"
import { Card } from "@/components/ui/card"
import { 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  TrendingUp,
  Wallet
} from "lucide-react"
import { useUserProfile } from "@/hooks/useUserProfile"
import { useAccount } from "wagmi"
import { CONTRACTS } from "@/lib/contracts"

export default function MyProjectsPage() {
  const { isConnected } = useAccount()
  const { reputation } = useUserProfile()

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Card className="p-12 text-center">
            <Wallet className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Connect Your Wallet</h2>
            <p className="mt-2 text-muted-foreground">
              Please connect your wallet to view your projects
            </p>
          </Card>
        </main>
      </div>
    )
  }

  const completedJobs = reputation?.completedJobs || 0
  const totalEarned = completedJobs * 2000 // Mock calculation based on completed jobs

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">My Projects</h1>
          <p className="mt-2 text-muted-foreground">
            Track and manage your freelance projects on the blockchain
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{completedJobs}</p>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">0</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{completedJobs}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${totalEarned.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Earned (Est.)</p>
              </div>
            </div>
          </Card>
        </div>

        {/* No Projects Yet */}
        {completedJobs === 0 ? (
          <Card className="p-12 text-center">
            <Briefcase className="mx-auto h-16 w-16 text-muted-foreground/50" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">No Projects Yet</h3>
            <p className="mt-2 text-muted-foreground">
              Your completed jobs from the blockchain will appear here.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Projects are tracked via the JobEscrow smart contract at:<br />
              <code className="mt-2 inline-block rounded bg-muted px-2 py-1 text-xs">
                {CONTRACTS.JOB_ESCROW.slice(0, 10)}...{CONTRACTS.JOB_ESCROW.slice(-8)}
              </code>
            </p>
          </Card>
        ) : (
          <Card className="p-12 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {completedJobs} {completedJobs === 1 ? 'Project' : 'Projects'} Completed
            </h3>
            <p className="mt-2 text-muted-foreground">
              Your on-chain work history is tracked on the Fluent blockchain.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              View your transactions on the{' '}
              <a 
                href={`https://testnet.fluentscan.xyz/address/${CONTRACTS.JOB_ESCROW}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                block explorer
              </a>
            </p>
          </Card>
        )}
      </main>
    </div>
  )
}

