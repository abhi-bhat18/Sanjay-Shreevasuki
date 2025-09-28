# Email Configuration Setup

To enable email functionality for the contact form, you need to configure the following environment variables:

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
BUSINESS_EMAIL=info@caprofessional.com
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASS` (not your regular Gmail password)

## Alternative SMTP Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
```

## Email Features

The contact form will send:

1. **Business Email**: Detailed contact form submission to your business email
2. **User Confirmation**: Professional confirmation email to the user
3. **Formatted HTML**: Beautiful, responsive email templates
4. **Contact Details**: Name, email, phone, subject, and message
5. **Timestamp**: Submission time in Indian timezone
6. **IP Tracking**: User's IP address for security

## Testing

To test the email functionality:

1. Set up your environment variables
2. Run the development server: `npm run dev`
3. Submit the contact form
4. Check both your business email and the user's email

## Security Notes

- Never commit `.env.local` to version control
- Use app passwords, not regular passwords
- Consider using a dedicated email service for production
- Monitor email sending limits and quotas
