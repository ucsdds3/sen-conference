# API Documentation

## Stripe Checkout

The checkout flow is handled by the `POST /api/checkout` route.

- Ticket tier prices are currently hardcoded in `app/api/checkout/route.ts`:
  - General Admission: `$50`
  - Premium: `$75`
  - VIP: `$100`
- A Stripe Checkout Session is created with attendee information and ticket metadata.
- Student attendees (`status === "student"`) can apply promo codes in Stripe.
- On successful payment, users are redirected to `/tickets/success` with an assigned referral code in the query string.

Required environment variables for checkout:
```
STRIPE_SECRET_KEY        # Stripe secret key
NEXT_PUBLIC_BASE_URL     # development base URL for .env, deployment base URL for Vercel (or other hosting)
```

## Student Email Verification

Student verification is handled before checkout when a user selects student status and enters an `.edu` email.

1. `handleSubmit` generates a short verification code.
2. The code and submitted form data are stored in Upstash Redis for 2 minutes.
3. A verification email is sent through Gmail (`nodemailer`).
4. The student is redirected to `/tickets/verification`.
5. `POST /api/verify-code` validates the code, restores the saved form data, and removes the Redis entry.
6. After successful verification, the normal checkout flow continues.

On `/tickets/verification`, students can use **Resend code**: `POST /api/resend-verification` with `{ "email": "<same as query>" }` deletes the current Redis entry, stores a new code with the same saved form data (new 2‑minute expiry), and sends a fresh email.

Required environment variables for student verification:
```
UPSTASH_REDIS_REST_URL        # Upstash database 
UPSTASH_REDIS_REST_TOKEN      # Upstash database token
GMAIL_USER                    # Gmail to send verification
GMAIL_APP_PASSWORD            # Gmail App password (different than actual password!)
```

## Google Sheet Webhook

The Stripe webhook endpoint is implemented at `POST /api/webhook` and is used to log completed ticket purchases to Google Sheets.

- The route verifies incoming webhook signatures using `STRIPE_WEBHOOK_SECRET`.
- Only `checkout.session.completed` events are processed.
- Attendee and ticket metadata from the Stripe session is appended to the configured sheet.
- This creates a lightweight registration log for organizers without requiring a technical database (sorta like a dashboard).

Required environment variables for the webhook:
```
STRIPE_SECRET_KEY         # Stripe secret key
STRIPE_WEBHOOK_SECRET     # Stripe webhook secret
GOOGLE_CLIENT_EMAIL       # Google Services Bot Email
GOOGLE_PRIVATE_KEY        # Google Services Bot Key
GOOGLE_SHEET_ID           # Spreadsheet ID
```