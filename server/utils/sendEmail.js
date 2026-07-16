import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, html }) => {
  try {
    console.log("====================================");
    console.log("📧 Preparing to send email...");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "EMAIL_PASS exists:",
      !!process.env.EMAIL_PASS
    );
    console.log("====================================");

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use false for port 587

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      requireTLS: true,

      tls: {
        rejectUnauthorized: false,
      },

      // Force IPv4 (helps on some Render deployments)
      family: 4,

      connectionTimeout: 60000,
      greetingTimeout: 60000,
      socketTimeout: 60000,
    });

    // Verify SMTP connection
    await transporter.verify();

    console.log("✅ SMTP connection verified.");

    // Send email
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
    console.error("====================================");
    console.error("❌ EMAIL SENDING FAILED");
    console.error("Code:", error.code);
    console.error("Message:", error.message);
    console.error(error);
    console.error("====================================");

    throw error;
  }
};

export default sendEmail;