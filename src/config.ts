const envVar = process.env.NEXT_PUBLIC_ENABLE_WALLET
export const WALLET_ENABLED = envVar === 'true' || envVar === '1' ? true : false;