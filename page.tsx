'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/contexts/AuthContext'
import toast from 'react-hot-toast'

const formatTrialStatus = (trialEndsAt?: string) => {
  if (!trialEndsAt) return null
  const end = new Date(trialEndsAt)
  const now = new Date()
  const diff = end.getTime() - now.getTime()
  if (diff <= 0) return 'Your trial has ended.'

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  return `${days} day(s) and ${hours} hour(s) remaining in your free trial.`
}

export default function SubscriptionPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [subscription, setSubscription] = useState<{
    status: string
    plan: string
    subscriptionId?: string
    trialStartAt?: string
    trialEndsAt?: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [loading, user, router])

  useEffect(() => {
    if (user) {
      fetchSubscription()
    }
  }, [user])

  const fetchSubscription = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/subscription`)
      setSubscription(response.data)
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Unable to load subscription details')
    }
  }

  const handleCancel = async () => {
    if (!subscription?.subscriptionId) return
    setIsLoading(true)

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/cancel-subscription`)
      toast.success('Subscription canceled successfully')
      fetchSubscription()
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Unable to cancel subscription')
    } finally {
      setIsLoading(false)
    }
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p className="text-lg">Loading subscription details…</p>
      </div>
    )
  }

  const trialText = subscription ? formatTrialStatus(subscription.trialEndsAt) : null
  const isActive = subscription?.status === 'active' || subscription?.status === 'trial'

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <Card className="bg-slate-900/90 border border-slate-700">
          <CardHeader>
            <CardTitle>Subscription Management</CardTitle>
            <CardDescription>Manage your Razorpay plan and trial status for Citta.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-300">
            {subscription ? (
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Plan</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{subscription.plan || 'free'}</p>
                  <p className="mt-1 text-slate-400">Status: {subscription.status}</p>
                </div>
                {trialText ? (
                  <div className="rounded-3xl bg-cyan-500/10 p-5 text-slate-200">
                    <p className="font-medium">Free Trial</p>
                    <p className="mt-2">{trialText}</p>
                  </div>
                ) : null}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => router.push('/pricing')}
                  >
                    Upgrade Plan
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={handleCancel}
                    disabled={!subscription.subscriptionId || subscription.status === 'canceled' || isLoading}
                  >
                    {isLoading ? 'Canceling…' : 'Cancel Subscription'}
                  </Button>
                </div>
                {subscription.status === 'canceled' ? (
                  <p className="rounded-3xl bg-rose-500/10 p-4 text-rose-200">
                    Your subscription has been canceled. You may restart your plan from the pricing page at any time.
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-slate-300">No subscription details found. Visit pricing to start your free trial and subscription.</p>
                <Button className="mt-4" onClick={() => router.push('/pricing')}>View pricing</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
