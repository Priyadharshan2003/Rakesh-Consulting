# Email Setup Instructions

Follow these steps to enable email notifications for your contact form submissions:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for an account
2. The free tier provides 200 emails per month, which should be sufficient for most small websites

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your preferred email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name the service (for example: "service_rakesh" or any name you prefer)
6. Note the Service ID for later use

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your template using these variables:
   - `{{from_name}}`: Name of the person submitting the form
   - `{{from_email}}`: Email address of the person submitting the form
   - `{{company}}`: Company name from the form
   - `{{message}}`: The message content from the form
   - `{{subject}}`: Subject line for the email

Here's a sample template:

```
Subject: {{subject}}

New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

--
This is an automated message from your website's contact form.
```

4. Save your template and note the Template ID

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" > "API Keys"
2. Copy your Public Key

## Step 5: Update Your .env File

1. Open the `.env` file in your project root
2. Update these variables with your actual values:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Step 6: Test the Email Setup

Run the test script to verify your email configuration:

```bash
npm run test-email
```

If successful, you should receive a test email and see a confirmation in the console.

## Troubleshooting

### Common Issues:

1. **Email not being sent**
   - Check your console for error messages
   - Verify your EmailJS credentials are correct in the `.env` file
   - Ensure your email service is properly set up in EmailJS

2. **"Missing Public Key" Error**
   - Make sure you've copied your public key correctly from EmailJS
   - Check that the key is properly set in your `.env` file

3. **Wrong Email Format**
   - Check your email template in EmailJS to ensure it uses the correct variables

4. **Rate Limiting**
   - The free tier of EmailJS limits to 200 emails/month
   - If you exceed this, you'll need to upgrade your plan

## Contact Form Email Flow

When a user submits the contact form:
1. The data is saved to Firebase (existing functionality)
2. An email notification is sent to your admin email
3. Both processes happen in parallel
4. If email sending fails, the form data is still saved to Firebase

This ensures you get immediate notification of new form submissions while maintaining data in your database.
