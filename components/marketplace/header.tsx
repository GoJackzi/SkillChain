'use client'

import { Button } from "@/components/ui/button"
import { Bell, Menu } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

export function MarketplaceHeader() {
  const { address, isConnected } = useAccount()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SkillChain</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link href="/marketplace" className="text-sm font-medium text-foreground">
                Marketplace
              </Link>
              <Link href="/my-projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                My Projects
              </Link>
              <Link href="/skills" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Skills
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
            </Button>

            {isConnected && address ? (
              <Link href="/profile" className="h-9 w-9 cursor-pointer ring-2 ring-accent ring-offset-2 ring-offset-background rounded-full overflow-hidden block">
                <Avatar className="h-full w-full">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {address.slice(2, 4).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Link>
            ) : null}

            <ConnectButton 
              showBalance={false}
              chainStatus="icon"
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'address',
              }}
            />

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
