'use client'

import { useAccount, useReadContract } from 'wagmi'
import { CONTRACTS, SKILL_REGISTRY_ABI, JOB_ESCROW_ABI } from '@/lib/contracts'

export function useUserProfile() {
  const { address, isConnected } = useAccount()

  // Get user's reputation from SkillRegistry
  const { data: reputationData } = useReadContract({
    address: CONTRACTS.SKILL_REGISTRY,
    abi: SKILL_REGISTRY_ABI,
    functionName: 'getUserReputation',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isConnected,
    },
  })

  const reputation = reputationData
    ? {
        score: Number(reputationData[0]),
        completedJobs: Number(reputationData[1]),
        totalRating: Number(reputationData[2]),
        averageRating:
          Number(reputationData[1]) > 0
            ? (Number(reputationData[2]) / Number(reputationData[1]) / 100).toFixed(1)
            : '0.0',
      }
    : null

  return {
    address,
    isConnected,
    reputation,
  }
}

