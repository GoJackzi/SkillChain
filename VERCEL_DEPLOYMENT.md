# Deploying to Vercel 🚀

## Environment Variables

You need **1 environment variable** for SkillChain to work on Vercel:

### Required:
- `NEXT_PUBLIC_WC_PROJECT_ID` - WalletConnect Project ID for wallet connections

## How to Get WalletConnect Project ID

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Sign in (or create free account)
3. Click **"New Project"**
4. Name it: `SkillChain` (or whatever you want)
5. Copy the **Project ID**

## Vercel Deployment Steps

### Option 1: Deploy via GitHub (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repo: `GoJackzi/SkillChain`
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Add Environment Variable:
   - Key: `NEXT_PUBLIC_WC_PROJECT_ID`
   - Value: `[paste your WalletConnect Project ID]`
6. Click **"Deploy"**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add NEXT_PUBLIC_WC_PROJECT_ID

# Deploy to production
vercel --prod
```

## After Deployment

1. Your app will be live at: `https://skillchain.vercel.app` (or custom domain)
2. Test wallet connection
3. Make sure you're on Fluent Testnet (Chain ID: 20994)
4. Start verifying skills and applying to jobs!

## Troubleshooting

**Issue**: Wallet won't connect
- **Fix**: Make sure `NEXT_PUBLIC_WC_PROJECT_ID` is set in Vercel environment variables

**Issue**: "Wrong Network" error
- **Fix**: Switch to Fluent Testnet in your wallet (RPC: `https://rpc.testnet.fluent.xyz`, Chain ID: 20994)

**Issue**: Build fails
- **Fix**: Check build logs in Vercel dashboard, ensure all dependencies are installed

---

Made with ❤️ by Musky for Fluent

