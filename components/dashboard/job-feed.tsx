'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, MapPin, Shield, Briefcase } from "lucide-react"
import Link from "next/link"

export function JobFeed() {
  // Show a message to browse marketplace instead of fake data
  // In a real app, this would fetch personalized job recommendations

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Find Jobs</CardTitle>
        <Link href="/marketplace">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Discover Opportunities
          </h3>
          <p className="mb-6 max-w-sm text-sm text-muted-foreground">
            Browse 20 available jobs in the marketplace. Find projects that match your skills and interests.
          </p>
          <Link href="/marketplace">
            <Button>
              Browse Jobs
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
