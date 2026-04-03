# API Documentation

All APIs used for this website use RESTful APIs.

## Stripe Checkout

The checkout flow is handled by the `POST /api/checkout` route.

A Stripe object is initialized with your Stripe Secret Key (which should be an environment variable). When the API receives a request, it uses the Stripe object to create a Checkout Session object. 

The following includes the information used by the Stripe Checkout Session in this project:
- Payment method types
- Item(s) being purchased
- Stripe Checkout mode
- Customer email
- Whether to allow promo codes (if they are a student)
- A URL to redirect the user on successful checkout
- A URL to redirect the user on canceled checkout
- Transaction metadata (required for the webhook later)

Required environment variables for checkout:
```
STRIPE_SECRET_KEY        # Stripe secret key
NEXT_PUBLIC_BASE_URL     # development base URL for .env, deployment base URL for Vercel (or other hosting)
```

To set up Stripe Checkout, simply make a Stripe account <a href="https://stripe.com/">here</a>, and put your secret key as an environment variable.

## Student Email Verification

The student checkout flow is handled by the `POST /api/verify-code` route.

Prior to paying, if the user claims they are a student and enters a `.edu` email, they must go through verification. This is handled prior to using the Stripe CLI.

On `/tickets/verification`, students can use **Resend code**: `POST /api/resend-verification` with `{ "email": "<same as query>" }` deletes the current Redis entry, stores a new code with the same saved form data (new 2‑minute expiry), and sends a fresh email.

Required environment variables for student verification:
```
UPSTASH_REDIS_REST_URL        # Upstash database 
UPSTASH_REDIS_REST_TOKEN      # Upstash database token
GMAIL_USER                    # Gmail to send verification
GMAIL_APP_PASSWORD            # Gmail App password (different than actual password!)
```

To set up the Upstash database, create an Upstash account, create a Redis database and input the `REST_TOKEN` and `REST_URL` into your environment variables.

To set up the email that sends the verification code:
- Go to <a href="https://myaccount.google.com/">your Google Account</a> of the account you wish to use
- Security & Sign-in > 2-Step Verification > App Passwords
- You should be able to get a 16 character password for your Google account that you can store in the GMAIL_APP_PASSWORD environment variable. 

## Google Sheet Webhook

The Stripe webhook is handled by the `POST /api/webhook` route.

The route verifies incoming webhook signatures using `STRIPE_WEBHOOK_SECRET`. Only `checkout.session.completed` events are processed. Using an authorized Google service account, attendee and ticket metadata from the Stripe session is appended to the configured sheet, which creates a log for the event organizers that is easy to access.

Required environment variables for the webhook:
```
STRIPE_SECRET_KEY         # Stripe secret key
STRIPE_WEBHOOK_SECRET     # Stripe webhook secret
GOOGLE_CLIENT_EMAIL       # Google Services Bot Email
GOOGLE_PRIVATE_KEY        # Google Services Bot Key
GOOGLE_SHEET_ID           # Spreadsheet ID
```

To set up the authorized Google service account:
- Go to <a href="https://console.cloud.google.com/">Google Cloud Console</a> and login into your desired Google account.
- Optionally, create a new project. 
- Go to the navigation bar, click on IAM & Admin > Service Accounts, and click "Create Service Account". 
- Once you give your service account a name and description, your service account has been made! 
- To use the service account, go to Actions > Manage Keys > Add Key > Create New Key, and download it as a JSON. 
- Copy the values of "private_key" and "client_email" and set those to your `GOOGLE_PRIVATE_KEY` and `GOOGLE_CLIENT_EMAIL` environment variables, respectively.

The `GOOGLE_SHEET_ID` environment variable can be copied from the spreadsheet link. For example, a spreadsheet with a link of `https://docs.google.com/spreadsheets/d/abcde12345/edit#gid=0` has the ID of `abcde12345`.

To set up the Stripe webhook:
- Go to your Stripe account's webhook page. 
- Add a destination.
- Set the event to `checkout.session.completed` and continue.
- Set destination type to webhook endpoint and continue.
- Set the endpoint URL to the directory of your webhook API (in the case of this project, the URL is `https://sen-conference.vercel.app/api/webhook`) and continue.
- Copy the signing secret and set it as the `STRIPE_WEBHOOK_SECRET` environment variable.

Note that Stripe will be sending the event to the deployed route, not your development route. To send the webhook event to development (useful for when you're modifying the webhook and you want to test it out without pushing to prod), install the Stripe CLI <a href="">here</a> and run:
```
stripe login                                                # and connect your Stripe account to the CLI
```

```
stripe listen --forward-to localhost:3000/api/webhook       # forwards all events to localhost instead of your deployed website
```
