import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  try {
    console.log("📧 Preparing to send email...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "EMAIL_PASS exists:",
      !!process.env.EMAIL_PASS
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true only for port 465

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 30000,
    });

    // Verify SMTP connection
    await transporter.verify();

    console.log("✅ SMTP server connected successfully.");

    // Send Email
    const info = await transporter.sendMail({
      from: `"CyberSafe Student Portal" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent successfully.");
    console.log("Message ID:", info.messageId);

    return info;
  } catch (error) {
    console.error("❌ Email sending failed:");
    console.error(error);

    throw error;
  }
};

export default sendEmail;