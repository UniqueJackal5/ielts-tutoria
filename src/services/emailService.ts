import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    const mailOptions = {
      from: `IELTS Tutoria <${process.env.EMAIL_USER}>`,
      ...options
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${token}`;
  
  await sendEmail({
    to: email,
    subject: 'Verify Your Email Address',
    text: `Please click the following link to verify your email: ${verificationUrl}`,
    html: `
      <div>
        <h1>Verify Your Email Address</h1>
        <p>Please click the button below to verify your email address:</p>
        <a href="${verificationUrl}" style="
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        ">Verify Email</a>
        <p>If you didn't request this, please ignore this email.</p>
      </div>
    `
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;
  
  await sendEmail({
    to: email,
    subject: 'Password Reset Request',
    text: `Please click the following link to reset your password: ${resetUrl}`,
    html: `
      <div>
        <h1>Password Reset Request</h1>
        <p>Please click the button below to reset your password:</p>
        <a href="${resetUrl}" style="
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        ">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
      </div>
    `
  });
};
