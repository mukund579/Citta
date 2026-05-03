/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    NEXT_PUBLIC_RAZORPAY_MONTHLY_PLAN_ID: process.env.NEXT_PUBLIC_RAZORPAY_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_RAZORPAY_YEARLY_PLAN_ID: process.env.NEXT_PUBLIC_RAZORPAY_YEARLY_PLAN_ID,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
