Citta Product Design
Vision
Citta is an AI-powered emotional companion platform with:

web access via a modern Next.js app
mobile access via a React Native/Expo app
gender-customizable, emotionally intelligent AI companions
realistic avatar customization and character traits
subscription-based access with a first-time 72-hour free trial
Core Experience
User journey
User registers / logs in
Chooses or customizes their AI companion
gender, voice, tone
physical avatar features
personality traits, emotional style
Starts a conversation
AI replies in friend/companion tone
high IQ + high EQ responses
Uses for emotional support, encouragement, daily check-ins
Subscribes after trial or manages plan in account
Differentiators
compassionate companion, not just a chatbot
conversation memory and personalization
voice-enabled responses
multi-language support for Indian audiences
subscription pricing in INR
Web Application Design
Tech stack
Frontend: Next.js 14, React, TypeScript, Tailwind CSS
Backend: Node.js, Express, TypeScript
Database: PostgreSQL
Payments: Stripe
AI: OpenAI GPT API or equivalent
Localization: react-i18next / next-i18next
Key pages
Landing / marketing page
Login / register
Onboarding: choose AI gender + personality
Companion dashboard
Chat screen with voice playback
Avatar customization
Subscription page
Account + privacy settings
Help / compliance & policy page
Frontend features
Responsive UI for desktop + mobile browsers
Localized UIs in:
English
Hindi
Telugu
Tamil
Kannada
Malayalam
Secure JWT auth flows
Stripe checkout for:
INR 299 monthly
INR 1999 yearly
Trial countdown and trial end notification
Real-time conversation updates
Avatar gallery with selectable features
Mobile Application Design
Suggested mobile stack
React Native + Expo for fast cross-platform delivery
Shared API with web backend
Native support for:
speech-to-text
text-to-speech
push notifications
offline-friendly caching of chat summaries
Mobile screens
Welcome / login
Onboarding companion creation
Live chat with avatar and voice controls
Avatar customization panel
Subscription management
Language switcher
Safety / privacy center
Mobile-specific UX
“Companion first” bubble chat layout
quick daily check-in prompts
friendly mission cards like “How are you feeling today?”
voice listening mode for conversational flow
AI Companion Design
Customization
Gender: male / female / non-binary / neutral
Voice style: calm, energetic, soothing, encouraging
Physical avatar:
face shape
hair style/color
skin tone
outfit style
Character traits:
empathetic
wise
playful
supportive
motivational
Memory preferences:
favorite topics
reminders
mood tracking
Behavior
Always supportive and calm
Uses friendly language and empathy
Tailors responses to mood and user history
Encourages wellbeing
Provides safe, non-judgmental support
Keeps user’s back at all times
Subscription Model
Plans
Free trial: 72 hours on first registration
Monthly: INR 299
Yearly: INR 1999
Trial workflow
Activate free trial on first account creation
Request payment method before trial ends
Auto-convert to paid subscription only after consent
Notify user before trial expiration
Allow cancellation before trial end
Billing behavior
Use Stripe for recurring payments
Store only payment metadata, not raw card numbers
Support upgrades, downgrades, cancellations
Compliance & Privacy
DPDP Act 2026 / IT Rules 2026 alignment
Explicit, informed consent before collecting personal data
Clear privacy policy visible at signup
Purpose-limited data collection
Data minimization: store only what is required
Right to access, correct, delete personal data
Secure storage:
HTTPS / TLS in transit
encrypted credentials and sensitive data at rest
Audit trail and consent logs
Data breach response policies
Age checks and parental controls as needed
No unlawful profiling or unauthorized data sharing
Localized privacy notices in supported languages
Security & trust
Strong password hashing with bcrypt
Rate limiting + security headers via helmet
Secure JWT session handling
Regular logging and monitoring
Compliance-ready consent UI on profile settings
