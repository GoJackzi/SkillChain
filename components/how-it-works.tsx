import { CheckCircle2 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up with your wallet and build your professional profile. Connect your existing portfolios and work history.",
    },
    {
      number: "02",
      title: "Verify Your Skills",
      description:
        "Submit your work samples to industry validators. Earn NFT skill badges that prove your expertise on-chain.",
    },
    {
      number: "03",
      title: "Find Perfect Projects",
      description:
        "Browse opportunities or let AI match you with ideal clients. Apply with confidence using your verified credentials.",
    },
    {
      number: "04",
      title: "Work & Get Paid",
      description:
        "Collaborate using built-in tools. Funds are held in smart contract escrow and released upon milestone completion.",
    },
  ]

  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            How SkillChain works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From verification to payment, everything is transparent and secure
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
                <div className="hidden sm:block">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
