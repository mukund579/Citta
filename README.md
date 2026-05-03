# Citta

Citta is an emotionally intelligent AI companion platform with secure authentication, Razorpay subscription billing, and persistent conversation history.

## Project Structure

- `backend/` - Express + TypeScript API server
- `frontend/` - Next.js 14 frontend application
- `database/` - PostgreSQL initialization scripts

## Getting Started

1. Copy `.env.example` to `.env` and fill in the required values.
2. Start the database and services:

```bash
docker-compose up --build
```

3. Open the frontend at `http://localhost:3000`.

## Backend Development

```bash
cd backend
npm install
npm run dev
```

## Frontend Development

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT signing secret
- `OPENAI_API_KEY` - OpenAI API key
- `RAZORPAY_KEY_ID` - Razorpay API Key ID
- `RAZORPAY_KEY_SECRET` - Razorpay API Secret
- `RAZORPAY_WEBHOOK_SECRET` - Razorpay webhook secret
- `RAZORPAY_MONTHLY_PLAN_ID` - Razorpay monthly plan ID
- `RAZORPAY_YEARLY_PLAN_ID` - Razorpay yearly plan ID
- `FRONTEND_URL` - frontend URL for CORS

## Database

Initialize the PostgreSQL schema using `database/init.sql`.

## Notes

- The frontend uses the Next.js app router and Tailwind CSS.
- The backend supports authentication, user profile management, conversation history, and Razorpay subscription workflows.
