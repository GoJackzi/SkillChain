// Deployed SkillChain Contract Addresses on Fluent Testnet
export const CONTRACTS = {
  SKILL_VERIFIER: '0x310500eAda15912a87B0Ff773287392F92eD6E28',
  ESCROW_CALCULATOR: '0x4eb45D68d9eBB1c5E8a5D8aA546c4B034B4b32A0',
  SKILL_REGISTRY: '0x0b6a6a6b2837f8CC1888744CCEB5ead11185b192',
  JOB_ESCROW: '0xc58a3DdB4D04C97026E0A5a40619dD00674e28a1',
  PAYMENT_MANAGER: '0x47dabEfF5858813AfC3C8403b202F85b8a7f58a9',
} as const

// Contract ABIs
export const SKILL_VERIFIER_ABI = [
  {
    name: 'verifySkillProof',
    inputs: [
      { internalType: 'address', type: 'address', name: 'user' },
      { internalType: 'uint256', type: 'uint256', name: 'skill_hash' },
      { internalType: 'bytes', type: 'bytes', name: 'proof' },
    ],
    outputs: [{ internalType: 'bool', type: 'bool', name: '_0' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'calculateReputationScore',
    inputs: [
      { internalType: 'address', type: 'address', name: 'user' },
      { internalType: 'uint256', type: 'uint256', name: 'completed_jobs' },
      { internalType: 'uint256', type: 'uint256', name: 'total_rating' },
    ],
    outputs: [{ internalType: 'uint256', type: 'uint256', name: '_0' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'verifyMilestoneCompletion',
    inputs: [
      { internalType: 'uint256', type: 'uint256', name: 'job_id' },
      { internalType: 'uint256', type: 'uint256', name: 'milestone_id' },
      { internalType: 'uint256', type: 'uint256', name: 'proof_hash' },
    ],
    outputs: [{ internalType: 'bool', type: 'bool', name: '_0' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export const ESCROW_CALCULATOR_ABI = [
  {
    name: 'calculateEscrowAmount',
    inputs: [
      { internalType: 'uint256', type: 'uint256', name: 'base_amount' },
      { internalType: 'uint256', type: 'uint256', name: 'platform_fee_percent' },
    ],
    outputs: [{ internalType: 'uint256', type: 'uint256', name: '_0' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'calculateMilestonePayments',
    inputs: [
      { internalType: 'uint256', type: 'uint256', name: 'total_amount' },
      { internalType: 'uint256', type: 'uint256', name: 'num_milestones' },
    ],
    outputs: [{ internalType: 'uint256[]', type: 'uint256[]', name: '_0' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'calculatePlatformFee',
    inputs: [
      { internalType: 'uint256', type: 'uint256', name: 'amount' },
      { internalType: 'uint256', type: 'uint256', name: 'fee_percent' },
    ],
    outputs: [{ internalType: 'uint256', type: 'uint256', name: '_0' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

// Abbreviated - Full ABI is available in contract JSON
export const SKILL_REGISTRY_ABI = [
  {
    type: 'constructor',
    inputs: [{ name: '_skillVerifier', type: 'address', internalType: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'verifySkill',
    inputs: [
      { name: 'skillHash', type: 'uint256', internalType: 'uint256' },
      { name: 'proof', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'isSkillVerified',
    inputs: [
      { name: 'user', type: 'address', internalType: 'address' },
      { name: 'skillHash', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getUserReputation',
    inputs: [{ name: 'user', type: 'address', internalType: 'address' }],
    outputs: [
      { name: 'score', type: 'uint256', internalType: 'uint256' },
      { name: 'completedJobs', type: 'uint256', internalType: 'uint256' },
      { name: 'totalRating', type: 'uint256', internalType: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'updateReputation',
    inputs: [
      { name: 'user', type: 'address', internalType: 'address' },
      { name: 'completedJobs', type: 'uint256', internalType: 'uint256' },
      { name: 'totalRating', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'SkillVerified',
    inputs: [
      { name: 'user', type: 'address', indexed: true, internalType: 'address' },
      { name: 'skillHash', type: 'uint256', indexed: true, internalType: 'uint256' },
      { name: 'timestamp', type: 'uint256', indexed: false, internalType: 'uint256' },
    ],
    anonymous: false,
  },
] as const

// Full ABI snippets for main contracts
export const JOB_ESCROW_ABI = [
  {
    type: 'constructor',
    inputs: [
      { name: '_escrowCalculator', type: 'address' },
      { name: '_skillVerifier', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'createJob',
    inputs: [
      { name: 'baseAmount', type: 'uint256' },
      { name: 'platformFeePercent', type: 'uint256' },
      { name: 'milestoneCount', type: 'uint256' },
      { name: 'milestoneDescriptions', type: 'string[]' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'assignFreelancer',
    inputs: [
      { name: 'jobId', type: 'uint256' },
      { name: 'freelancer', type: 'address' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getJobDetails',
    inputs: [{ name: 'jobId', type: 'uint256' }],
    outputs: [
      { name: 'client', type: 'address' },
      { name: 'freelancer', type: 'address' },
      { name: 'totalAmount', type: 'uint256' },
      { name: 'status', type: 'uint8' },
      { name: 'milestoneCount', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'submitMilestone',
    inputs: [
      { name: 'jobId', type: 'uint256' },
      { name: 'milestoneId', type: 'uint256' },
      { name: 'proofHash', type: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'approveMilestone',
    inputs: [
      { name: 'jobId', type: 'uint256' },
      { name: 'milestoneId', type: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'releaseMilestonePayment',
    inputs: [
      { name: 'jobId', type: 'uint256' },
      { name: 'milestoneId', type: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'JobCreated',
    inputs: [
      { name: 'jobId', type: 'uint256', indexed: true },
      { name: 'client', type: 'address', indexed: true },
      { name: 'totalAmount', type: 'uint256', indexed: false },
      { name: 'milestoneCount', type: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
] as const

export const PAYMENT_MANAGER_ABI = [
  {
    type: 'constructor',
    inputs: [{ name: '_escrowCalculator', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'deposit',
    inputs: [],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'withdraw',
    inputs: [{ name: 'amount', type: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getUserBalance',
    inputs: [{ name: 'user', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'processPaymentWithFee',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      { name: 'user', type: 'address', indexed: true },
      { name: 'amount', type: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
] as const

