'use client'

import { DashboardHeader } from "@/components/dashboard/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Shield, Award, Briefcase, Wallet, Edit2, Save, X } from "lucide-react"
import { useUserProfile } from "@/hooks/useUserProfile"
import { useUserSkills } from "@/hooks/useUserSkills"
import { CONTRACTS } from "@/lib/contracts"
import { useState, useEffect } from "react"

export default function ProfilePage() {
  const { address, isConnected, reputation } = useUserProfile()
  const { verifiedSkills } = useUserSkills()
  
  const [isEditing, setIsEditing] = useState(false)
  const [profileName, setProfileName] = useState('')
  const [bio, setBio] = useState('')
  const [tempName, setTempName] = useState('')
  const [tempBio, setTempBio] = useState('')

  // Load profile data from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedName = localStorage.getItem('profileName') || ''
      const savedBio = localStorage.getItem('profileBio') || ''
      setProfileName(savedName)
      setBio(savedBio)
      setTempName(savedName)
      setTempBio(savedBio)
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('profileName', tempName)
    localStorage.setItem('profileBio', tempBio)
    setProfileName(tempName)
    setBio(tempBio)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempName(profileName)
    setTempBio(bio)
    setIsEditing(false)
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
          <Card className="p-12 text-center">
            <Wallet className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Connect Your Wallet</h2>
            <p className="mt-2 text-muted-foreground">
              Please connect your wallet to view your profile
            </p>
          </Card>
        </main>
      </div>
    )
  }

  const completedJobs = reputation?.completedJobs || 0
  const avgRating = reputation?.averageRating || '0.0'

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
        <div className="space-y-6">
          {/* Profile Header */}
          <Card className="p-6">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl">
                  {profileName 
                    ? profileName.slice(0, 2).toUpperCase()
                    : address?.slice(2, 4).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center sm:text-left">
                {!isEditing ? (
                  <>
                    <h1 className="text-3xl font-bold text-foreground">
                      {profileName || 'Your Profile'}
                    </h1>
                    <p className="mt-2 font-mono text-sm text-muted-foreground">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                    {bio && (
                      <p className="mt-3 text-sm text-muted-foreground">
                        {bio}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Display Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="max-w-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input
                        id="bio"
                        placeholder="Tell us about yourself"
                        value={tempBio}
                        onChange={(e) => setTempBio(e.target.value)}
                        className="max-w-sm"
                      />
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                  </div>
                )}
                
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Fluent Testnet</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {isConnected && (
                    <Badge variant="secondary" className="gap-1">
                      <Shield className="h-3 w-3" />
                      Connected
                    </Badge>
                  )}
                  {verifiedSkills > 0 && (
                    <Badge variant="outline">
                      {verifiedSkills} Skills Verified
                    </Badge>
                  )}
                </div>
              </div>

              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)}>
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{completedJobs}</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{avgRating}</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{verifiedSkills}</p>
                  <p className="text-sm text-muted-foreground">Skills Verified</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Blockchain Info */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground">Blockchain Profile</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network:</span>
                <span className="font-medium text-foreground">Fluent Testnet</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reputation Score:</span>
                <span className="font-medium text-foreground">{reputation?.score || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Rating:</span>
                <span className="font-medium text-foreground">{reputation?.totalRating || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Verified Skills:</span>
                <span className="font-medium text-foreground">{verifiedSkills}</span>
              </div>
            </div>
          </Card>

          {/* Contract Addresses */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground">Smart Contracts</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                <span className="text-muted-foreground">Skill Registry:</span>
                <code className="font-mono text-xs text-foreground">
                  {CONTRACTS.SKILL_REGISTRY.slice(0, 10)}...{CONTRACTS.SKILL_REGISTRY.slice(-8)}
                </code>
              </div>
              <p className="text-xs text-muted-foreground">
                All your data is stored on-chain and verifiable on the Fluent Testnet blockchain.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

