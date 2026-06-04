const nodemailer = require('nodemailer');

const emailHost = process.env.EMAIL_HOST;
const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10);
const emailSecure = process.env.EMAIL_SECURE === 'true';
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailFrom = process.env.EMAIL_FROM || emailUser;
const isEmailConfigured = Boolean(emailHost && emailUser && emailPass);

if (!isEmailConfigured) {
  console.warn(
    'Email credentials are not fully configured. Password reset emails will fail unless EMAIL_HOST, EMAIL_USER, and EMAIL_PASS are provided.',
  );
}

const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailSecure,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })
  : null;

async function sendPasswordResetOtp(email, userName, otp) {
  if (!isEmailConfigured || !transporter) {
    throw new Error('Email transport is not configured. Please set EMAIL_HOST, EMAIL_USER, and EMAIL_PASS.');
  }

  const subject = 'Your password reset OTP';
  const html = `
    <div style="font-family: Arial, sans-serif;">
      <p>Hi ${userName || 'there'},</p>
      <p>Your password reset OTP is:</p>
      <p style="font-size: 1.5rem; font-weight: bold; letter-spacing: 0.2rem;">${otp}</p>
      <p>This OTP expires in 5 minutes. Do not share it with anyone.</p>
      <p>If you did not request this, please ignore this email.</p>
      <p>Thanks,<br />Food Delivery System Team</p>
    </div>
  `;

  await transporter.sendMail({
    from: emailFrom,
    to: email,
    subject,
    html,
    text: `Your password reset OTP is ${otp}. It expires in 5 minutes.`,
  });
}

module.exports = {
  sendPasswordResetOtp,
  isEmailConfigured,
};
