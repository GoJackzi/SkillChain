'use client'

import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Award, TrendingUp, CheckCircle2, Wallet, Loader2 } from "lucide-react"
import { useUserSkills } from "@/hooks/useUserSkills"
import { useAccount } from "wagmi"
import { useState } from "react"
import { CONTRACTS } from "@/lib/contracts"

export default function SkillsPage() {
  const { isConnected } = useAccount()
  const { skills, totalSkills, verifiedSkills, averageProficiency, verifySkill, isPending, isConfirming } = useUserSkills()
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Blockchain", "Frontend", "Backend", "Development"]

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === selectedCategory)

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Card className="p-12 text-center">
            <Wallet className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Connect Your Wallet</h2>
            <p className="mt-2 text-muted-foreground">
              Please connect your wallet to manage your skills
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
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Skills</h1>
            <p className="mt-2 text-muted-foreground">
              Manage and verify your professional skills on the blockchain
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{verifiedSkills}</p>
                <p className="text-sm text-muted-foreground">Verified On-Chain</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalSkills}</p>
                <p className="text-sm text-muted-foreground">Total Skills</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{averageProficiency}%</p>
                <p className="text-sm text-muted-foreground">Avg Proficiency</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filter */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Skills List */}
        <div className="grid gap-4">
          {filteredSkills.map((skill, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                    {skill.verified && (
                      <Badge variant="secondary" className="gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Verified
                      </Badge>
                    )}
                    <Badge variant="outline">{skill.category}</Badge>
                  </div>
                  
                  {skill.verified ? (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-medium text-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Verify this skill on-chain to track proficiency
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  {!skill.verified && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => verifySkill(skill.hash)}
                      disabled={isPending || isConfirming}
                    >
                      {isPending || isConfirming ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        'Verify On-Chain'
                      )}
                    </Button>
                  )}
                  {skill.verified && (
                    <span className="text-sm text-muted-foreground">Verified on Fluent</span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Verification Info */}
        <Card className="mt-8 border-primary/20 bg-primary/5 p-6">
          <div className="flex items-start gap-4">
            <Shield className="mt-1 h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Blockchain Verification</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Click "Verify On-Chain" to register your skills on the Fluent Network blockchain. 
                Verified skills are cryptographically secured and can be independently validated by anyone.
                This creates an immutable reputation that clients can trust.
              </p>
              <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                <p>• Skills are stored on smart contract: {CONTRACTS.SKILL_REGISTRY.slice(0, 10)}...{CONTRACTS.SKILL_REGISTRY.slice(-8)}</p>
                <p>• Verification uses ZK-proof compatible technology (placeholder proofs for demo)</p>
                <p>• Each verification creates an on-chain transaction you can view on the explorer</p>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}

