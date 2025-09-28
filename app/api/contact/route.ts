import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        // Check if request is from the same origin
        const origin = request.headers.get('origin');
        const host = request.headers.get('host');

        if (origin && !origin.includes(host || '')) {
            return NextResponse.json(
                { error: 'Unauthorized request' },
                { status: 403 }
            );
        }

        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Configure email transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email to business (Sanjay & Shreevasuki Associates)
        const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          <p><strong>IP Address:</strong> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}</p>
        </div>
      </div>
    `;

        // Send email to business
        try {
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: ['shreevasuki@sanjayandshreevasuki.com', 'sanjay@sanjayandshreevasuki.com', 'abhishekbhat.dev@gmail.com'],
                subject: `New Contact Form: ${subject || 'General Inquiry'} - ${name}`,
                html: businessEmailHtml,
            });
        } catch (emailError) {
            console.error('Failed to send business email:', emailError);
            // Continue processing even if business email fails
        }

        // Send confirmation email to user
        const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; text-align: center;">Thank You for Contacting Us!</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to <strong>Sanjay & Shreevasuki Associates</strong>. We have received your message and will get back to you within 24 hours.</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151;">Your Message Summary:</h3>
          <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6; background-color: #f9fafb; padding: 10px; border-radius: 4px;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #1e40af; color: white; border-radius: 8px; text-align: center;">
          <h3 style="margin-top: 0;">Our Services</h3>
          <p style="margin-bottom: 0;">Tax Planning • Audit & Assurance • GST Services • Business Advisory</p>
        </div>
        
        <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p><strong>Sanjay & Shreevasuki Associates</strong></p>
          <p>3/4-1, 3rd floor, Isiri, 6th Cross Amarjyothinagar Nagarabhavi Road,<br>
          Raghavendra Swamy mutt road, Bangalore, Karnataka</p>
          <p>Phone: +91 98765 43210 | Email: info@caprofessional.com</p>
        </div>
      </div>
    `;

        try {
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: email,
                subject: 'Thank you for contacting Sanjay & Shreevasuki Associates',
                html: userEmailHtml,
            });
        } catch (emailError) {
            console.error('Failed to send user confirmation email:', emailError);
            // Continue processing even if user email fails
        }

        console.log('Contact form submission processed:', {
            name,
            email,
            phone,
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for your message! We will get back to you soon.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Handle other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}
