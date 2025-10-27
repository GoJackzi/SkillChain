import { Shield, Coins, Award, Users, Lock, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Verification",
      description:
        "NFT skill badges verified by industry experts. Your credentials are immutable and portable across platforms.",
    },
    {
      icon: Lock,
      title: "Smart Contract Escrow",
      description:
        "Milestone-based payments with automatic release. Funds are protected until work is approved by both parties.",
    },
    {
      icon: Award,
      title: "Reputation Oracle",
      description:
        "Build a verifiable reputation that follows you everywhere. Import work history from GitHub, Behance, and more.",
    },
    {
      icon: Coins,
      title: "Low Platform Fees",
      description:
        "Pay only 2-5% vs traditional 15-20%. More money in your pocket, powered by decentralized infrastructure.",
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description:
        "Smart algorithms connect you with perfect-fit projects. Get recommendations based on your verified skills.",
    },
    {
      icon: Users,
      title: "DAO Governance",
      description:
        "Community-driven platform decisions. Token holders vote on fees, features, and dispute resolutions.",
    },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Built on Fluent.xyz for seamless cross-chain functionality and maximum security
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border/50 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
