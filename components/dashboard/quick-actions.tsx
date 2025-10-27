'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Upload, MessageSquare, Settings } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function QuickActions() {
  const router = useRouter()
  
  const actions = [
    { 
      label: "Verify Skills", 
      icon: Upload, 
      variant: "default" as const,
      href: "/skills",
      description: "Verify your skills on-chain"
    },
    { 
      label: "Browse Jobs", 
      icon: Plus, 
      variant: "outline" as const,
      href: "/marketplace",
      description: "Find new opportunities"
    },
    { 
      label: "My Projects", 
      icon: MessageSquare, 
      variant: "outline" as const,
      href: "/my-projects",
      description: "View your projects"
    },
    { 
      label: "Profile", 
      icon: Settings, 
      variant: "outline" as const,
      href: "/profile",
      description: "Edit your profile"
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {actions.map((action) => (
          <Link key={action.label} href={action.href}>
            <Button variant={action.variant} className="w-full justify-start gap-2">
              <action.icon className="h-4 w-4" />
              {action.label}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
