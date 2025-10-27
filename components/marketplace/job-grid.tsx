'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, MapPin, Shield, Users } from "lucide-react"
import { useState } from "react"
import { JobApplicationModal } from "./job-application-modal"

export function JobGrid() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [appliedJobs, setAppliedJobs] = useState<Set<string>>(() => {
    // Load applied jobs from localStorage on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('appliedJobs')
      return saved ? new Set(JSON.parse(saved)) : new Set()
    }
    return new Set()
  })

  const handleApplyClick = (job: any) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  const handleApplicationSuccess = (jobTitle: string) => {
    // Add job to applied list
    const newAppliedJobs = new Set(appliedJobs)
    newAppliedJobs.add(jobTitle)
    setAppliedJobs(newAppliedJobs)
    
    // Save to localStorage
    localStorage.setItem('appliedJobs', JSON.stringify(Array.from(newAppliedJobs)))
  }
  const jobs = [
    {
      title: "Build DeFi Dashboard with React & Web3",
      client: "CryptoFinance Inc.",
      verified: true,
      budget: "$5,000 - $8,000",
      duration: "2-3 months",
      location: "Remote",
      skills: ["React", "Web3.js", "TypeScript", "Smart Contracts"],
      proposals: 12,
      posted: "2 hours ago",
      description: "Looking for an experienced React developer to build a comprehensive DeFi dashboard...",
    },
    {
      title: "NFT Marketplace UI/UX Design",
      client: "ArtChain Studios",
      verified: true,
      budget: "$3,000 - $5,000",
      duration: "1 month",
      location: "Remote",
      skills: ["Figma", "UI Design", "Prototyping", "Web3"],
      proposals: 8,
      posted: "5 hours ago",
      description: "We need a talented designer to create a modern, user-friendly interface for our NFT marketplace...",
    },
    {
      title: "Smart Contract Security Audit",
      client: "SecureChain Labs",
      verified: true,
      budget: "$10,000 - $15,000",
      duration: "3-4 weeks",
      location: "Remote",
      skills: ["Solidity", "Security", "Rust", "Auditing"],
      proposals: 5,
      posted: "1 day ago",
      description:
        "Seeking experienced auditor to review our DeFi protocol smart contracts for security vulnerabilities...",
    },
    {
      title: "Content Writer for Blockchain Blog",
      client: "Web3 Media Group",
      verified: true,
      budget: "$2,000 - $3,000",
      duration: "1-2 months",
      location: "Remote",
      skills: ["Content Writing", "Blockchain", "SEO", "Research"],
      proposals: 15,
      posted: "2 days ago",
      description: "Looking for a knowledgeable writer to create engaging content about blockchain technology...",
    },
    {
      title: "Full-Stack Developer for DAO Platform",
      client: "Governance Protocol",
      verified: true,
      budget: "$8,000 - $12,000",
      duration: "3-4 months",
      location: "Remote",
      skills: ["Next.js", "Node.js", "Solidity", "PostgreSQL"],
      proposals: 10,
      posted: "3 days ago",
      description: "We are building a comprehensive DAO governance platform and need a skilled full-stack developer...",
    },
    {
      title: "Mobile App Developer for Crypto Wallet",
      client: "WalletTech Solutions",
      verified: true,
      budget: "$6,000 - $9,000",
      duration: "2-3 months",
      location: "Remote",
      skills: ["React Native", "Blockchain", "Mobile", "Security"],
      proposals: 7,
      posted: "4 days ago",
      description: "Seeking experienced mobile developer to build a secure, user-friendly crypto wallet application...",
    },
    {
      title: "Solidity Developer for DEX Protocol",
      client: "SwapChain Finance",
      verified: true,
      budget: "$12,000 - $18,000",
      duration: "3-5 months",
      location: "Remote",
      skills: ["Solidity", "DeFi", "Uniswap", "Testing"],
      proposals: 9,
      posted: "5 days ago",
      description: "Building a next-generation DEX with advanced features. Need expert Solidity developer for smart contract development...",
    },
    {
      title: "Frontend Developer for NFT Gallery",
      client: "Digital Art Collective",
      verified: true,
      budget: "$4,000 - $6,000",
      duration: "1-2 months",
      location: "Remote",
      skills: ["React", "Three.js", "IPFS", "Web3"],
      proposals: 14,
      posted: "1 week ago",
      description: "Create an immersive 3D NFT gallery experience with WebGL animations and blockchain integration...",
    },
    {
      title: "Rust Developer for Layer 2 Solution",
      client: "ScaleTech Labs",
      verified: true,
      budget: "$15,000 - $25,000",
      duration: "4-6 months",
      location: "Remote",
      skills: ["Rust", "Blockchain", "Cryptography", "Performance"],
      proposals: 4,
      posted: "1 week ago",
      description: "Working on cutting-edge L2 scaling solution. Looking for expert Rust developer with blockchain experience...",
    },
    {
      title: "Community Manager for DeFi Project",
      client: "LiquidYield Protocol",
      verified: true,
      budget: "$3,000 - $4,500",
      duration: "Ongoing",
      location: "Remote",
      skills: ["Community", "Discord", "Twitter", "DeFi Knowledge"],
      proposals: 22,
      posted: "1 week ago",
      description: "Manage and grow our community across Discord, Twitter, and Telegram. Create engagement and answer questions...",
    },
    {
      title: "Video Editor for Crypto YouTube Channel",
      client: "BlockchainBuzz Media",
      verified: true,
      budget: "$2,500 - $4,000",
      duration: "2-3 months",
      location: "Remote",
      skills: ["Video Editing", "After Effects", "Motion Graphics", "Thumbnails"],
      proposals: 18,
      posted: "2 weeks ago",
      description: "Edit educational crypto content for YouTube. Need polished videos with animations and engaging thumbnails...",
    },
    {
      title: "Smart Contract Auditor (Experienced)",
      client: "ShieldAudit",
      verified: true,
      budget: "$20,000 - $30,000",
      duration: "1-2 months",
      location: "Remote",
      skills: ["Solidity", "Security", "Auditing", "Formal Verification"],
      proposals: 3,
      posted: "2 weeks ago",
      description: "Comprehensive audit of multi-chain DeFi protocol. Must have proven track record and certifications...",
    },
    {
      title: "Technical Writer for Documentation",
      client: "ChainDocs",
      verified: true,
      budget: "$4,000 - $6,000",
      duration: "2 months",
      location: "Remote",
      skills: ["Technical Writing", "Blockchain", "Documentation", "APIs"],
      proposals: 11,
      posted: "2 weeks ago",
      description: "Write comprehensive developer documentation for our blockchain API. Must explain complex concepts clearly...",
    },
    {
      title: "DevOps Engineer for Node Infrastructure",
      client: "ValidatorPro",
      verified: true,
      budget: "$8,000 - $12,000",
      duration: "3-4 months",
      location: "Remote",
      skills: ["DevOps", "Kubernetes", "AWS", "Monitoring"],
      proposals: 6,
      posted: "3 weeks ago",
      description: "Set up and maintain validator node infrastructure. Need expertise in cloud deployment and monitoring...",
    },
    {
      title: "UI/UX Designer for Web3 Wallet",
      client: "ConnectWallet Inc.",
      verified: true,
      budget: "$5,000 - $7,500",
      duration: "1-2 months",
      location: "Remote",
      skills: ["UI Design", "UX Research", "Figma", "Web3"],
      proposals: 16,
      posted: "3 weeks ago",
      description: "Design intuitive interface for multi-chain wallet. Focus on simplifying complex blockchain interactions...",
    },
    {
      title: "Tokenomics Consultant",
      client: "LaunchDAO",
      verified: true,
      budget: "$6,000 - $10,000",
      duration: "1 month",
      location: "Remote",
      skills: ["Tokenomics", "Economics", "Game Theory", "DeFi"],
      proposals: 8,
      posted: "3 weeks ago",
      description: "Design sustainable token economics for new DeFi protocol. Need expertise in incentive structures and game theory...",
    },
    {
      title: "Python Bot Developer for Trading",
      client: "AlgoTrade Labs",
      verified: true,
      budget: "$7,000 - $11,000",
      duration: "2-3 months",
      location: "Remote",
      skills: ["Python", "Trading Bots", "APIs", "Data Analysis"],
      proposals: 13,
      posted: "1 month ago",
      description: "Build automated trading bot for DEX arbitrage. Experience with web3.py and exchange APIs required...",
    },
    {
      title: "Graphic Designer for NFT Collection",
      client: "Pixel Pioneers",
      verified: true,
      budget: "$8,000 - $15,000",
      duration: "2-3 months",
      location: "Remote",
      skills: ["Illustration", "Character Design", "NFT", "Generative Art"],
      proposals: 25,
      posted: "1 month ago",
      description: "Create 10,000 unique NFT characters with traits system. Must have portfolio of NFT or character work...",
    },
    {
      title: "Go Developer for Blockchain Core",
      client: "ChainCore Technologies",
      verified: true,
      budget: "$18,000 - $28,000",
      duration: "5-6 months",
      location: "Remote",
      skills: ["Go", "Blockchain", "Consensus", "Networking"],
      proposals: 5,
      posted: "1 month ago",
      description: "Contribute to core blockchain development. Working on consensus mechanism and P2P networking layer...",
    },
    {
      title: "Social Media Manager for NFT Project",
      client: "MetaArt Studios",
      verified: true,
      budget: "$3,500 - $5,500",
      duration: "3 months",
      location: "Remote",
      skills: ["Social Media", "Marketing", "NFT", "Community"],
      proposals: 19,
      posted: "1 month ago",
      description: "Manage social media presence for upcoming NFT launch. Create content, engage community, coordinate campaigns...",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {jobs.length} opportunities</p>
        <select className="rounded-md border border-border bg-background px-3 py-2 text-sm">
          <option>Most Recent</option>
          <option>Highest Budget</option>
          <option>Most Proposals</option>
        </select>
      </div>

      <div className="grid gap-4">
        {jobs.map((job, index) => (
          <Card key={index} className="transition-all hover:border-primary/50 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    {appliedJobs.has(job.title) && (
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        APPLIED
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{job.client}</span>
                    {job.verified && <Shield className="h-4 w-4 text-accent" />}
                  </div>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">{job.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {job.budget}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {job.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {job.proposals} proposals
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">Posted {job.posted}</span>
                {appliedJobs.has(job.title) ? (
                  <Button variant="outline" disabled>
                    Applied ✓
                  </Button>
                ) : (
                  <Button onClick={() => handleApplyClick(job)}>Apply Now</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedJob && (
        <JobApplicationModal
          job={selectedJob}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSuccess={() => handleApplicationSuccess(selectedJob.title)}
        />
      )}
    </div>
  )
}
