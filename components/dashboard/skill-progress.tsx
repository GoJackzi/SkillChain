'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Award } from "lucide-react"
import { useUserSkills } from "@/hooks/useUserSkills"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SkillProgress() {
  const { skills } = useUserSkills()
  
  // Get top 3 verified skills, or top 3 unverified if no verified
  const topSkills = skills
    .filter(s => s.verified)
    .slice(0, 3)
  
  const displaySkills = topSkills.length > 0 
    ? topSkills 
    : skills.slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Skill Verification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {displaySkills.length > 0 ? (
          <>
            {displaySkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    {skill.verified && <Shield className="h-4 w-4 text-accent" />}
                  </div>
                  <Badge variant={skill.verified ? "default" : "secondary"} className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                {skill.verified && (
                  <>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Proficiency: {skill.level}%
                    </p>
                  </>
                )}
                {!skill.verified && (
                  <p className="text-xs text-muted-foreground">
                    Not verified yet
                  </p>
                )}
              </div>
            ))}
            <Link href="/skills">
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Skills
              </Button>
            </Link>
          </>
        ) : (
          <div className="py-8 text-center">
            <p className="text-sm text-muted-foreground">No skills yet</p>
            <Link href="/skills">
              <Button variant="outline" size="sm" className="mt-4">
                Add Skills
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
