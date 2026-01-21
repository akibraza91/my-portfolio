import nodemailer from 'nodemailer';

// Configure your email service here
// For Gmail: https://myaccount.google.com/apppasswords
// For other services, get SMTP credentials from your provider

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    // Send email to your address
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h2>Thank You!</h2>
        <p>Hi ${name},</p>
        <p>I received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Akib</p>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully!' 
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email. Please try again later.' 
      }),
      { status: 500 }
    );
  }
}
