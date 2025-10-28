'use client'

import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { CONTRACTS, SKILL_REGISTRY_ABI } from '@/lib/contracts'
import { keccak256, toBytes } from 'viem'

// Common skill categories and their hashes
export const PREDEFINED_SKILLS = [
  { name: 'Solidity Development', hash: keccak256(toBytes('Solidity Development')), category: 'Blockchain' },
  { name: 'Smart Contract Security', hash: keccak256(toBytes('Smart Contract Security')), category: 'Blockchain' },
  { name: 'React & Next.js', hash: keccak256(toBytes('React & Next.js')), category: 'Frontend' },
  { name: 'Rust Programming', hash: keccak256(toBytes('Rust Programming')), category: 'Blockchain' },
  { name: 'Web3 Integration', hash: keccak256(toBytes('Web3 Integration')), category: 'Blockchain' },
  { name: 'TypeScript', hash: keccak256(toBytes('TypeScript')), category: 'Frontend' },
  { name: 'DeFi Protocols', hash: keccak256(toBytes('DeFi Protocols')), category: 'Blockchain' },
  { name: 'Node.js & APIs', hash: keccak256(toBytes('Node.js & APIs')), category: 'Backend' },
  { name: 'GraphQL', hash: keccak256(toBytes('GraphQL')), category: 'Backend' },
  { name: 'Testing & QA', hash: keccak256(toBytes('Testing & QA')), category: 'Development' },
]

export function useUserSkills() {
  const { address, isConnected } = useAccount()
  const { writeContract, data: hash, isPending } = useWriteContract()

  // Check verification status for each predefined skill
  const skillChecks = PREDEFINED_SKILLS.map((skill) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: isVerified } = useReadContract({
      address: CONTRACTS.SKILL_REGISTRY,
      abi: SKILL_REGISTRY_ABI,
      functionName: 'isSkillVerified',
      args: address ? [address, BigInt(skill.hash)] : undefined,
      query: {
        enabled: !!address && isConnected,
      },
    })

    return {
      ...skill,
      verified: !!isVerified,
      // Proficiency only shows if skill is verified
      // In production, users would set this themselves
      level: isVerified ? 75 + (Number(BigInt(skill.hash) % 20n)) : 0,
    }
  })

  const verifySkill = async (skillHash: string) => {
    if (!address) return

    try {
      // Generate a dummy proof > 32 bytes (WASM contract requirement)
      // In production, this would be a real cryptographic proof
      const dummyProof = '0x' + '00'.repeat(33) // 33 bytes of zeros
      
      writeContract({
        address: CONTRACTS.SKILL_REGISTRY,
        abi: SKILL_REGISTRY_ABI,
        functionName: 'verifySkill',
        args: [BigInt(skillHash), dummyProof as `0x${string}`], // Convert hex string to BigInt
      })
    } catch (error) {
      console.error('Error verifying skill:', error)
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  return {
    skills: skillChecks,
    verifySkill,
    isPending,
    isConfirming,
    isConfirmed,
    totalSkills: skillChecks.length,
    verifiedSkills: skillChecks.filter((s) => s.verified).length,
    averageProficiency: skillChecks.filter((s) => s.verified).length > 0
      ? Math.round(
          skillChecks.filter((s) => s.verified).reduce((acc, s) => acc + s.level, 0) / 
          skillChecks.filter((s) => s.verified).length
        )
      : 0,
  }
}

