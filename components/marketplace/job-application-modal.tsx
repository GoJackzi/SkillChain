'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, Clock, MapPin, CheckCircle2, Loader2 } from "lucide-react"

interface JobApplicationModalProps {
  job: any
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function JobApplicationModal({ job, isOpen, onClose, onSuccess }: JobApplicationModalProps) {
  const { isConnected } = useAccount()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [proposedRate, setProposedRate] = useState('')
  const [coverLetter, setCoverLetter] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Call success callback
    onSuccess()

    // Reset and close after showing success
    setTimeout(() => {
      setIsSuccess(false)
      setProposedRate('')
      setCoverLetter('')
      onClose()
    }, 2000)
  }

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Application Submitted!</h3>
            <p className="text-sm text-muted-foreground">
              Your proposal has been sent to {job.client}. They'll review it shortly.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
          <DialogDescription className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">{job.client}</span>
              {job.verified && <Badge variant="secondary">Verified</Badge>}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Job Details */}
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Project Description</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{job.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                <span className="font-medium text-foreground">{job.budget}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{job.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill: string) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-4 border-t pt-6">
            <h4 className="font-semibold text-foreground">Submit Your Proposal</h4>

            <div className="space-y-2">
              <Label htmlFor="rate">Your Proposed Rate (USD)</Label>
              <Input
                id="rate"
                type="text"
                placeholder="e.g., $5,000"
                value={proposedRate}
                onChange={(e) => setProposedRate(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover-letter">Cover Letter</Label>
              <Textarea
                id="cover-letter"
                placeholder="Explain why you're a great fit for this project..."
                className="min-h-[120px]"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Tip: Highlight your relevant experience and how you'll approach this project
              </p>
            </div>

            {!isConnected && (
              <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
                Please connect your wallet to submit a proposal
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isConnected || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Proposal'
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

