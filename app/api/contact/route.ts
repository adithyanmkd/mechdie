import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  company: string;
  requirement: string;
  product: string;
  message: string;
  honeypot?: string; // Anti-spam hidden field
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const { name, company, requirement, product, message, honeypot } = body;

    // Spam check: if honeypot is filled, silently discard
    if (honeypot && honeypot.trim() !== "") {
      console.warn("Spam submission blocked via honeypot trap.");
      return NextResponse.json(
        { success: true, message: "Inquiry received successfully." },
        { status: 200 }
      );
    }

    // Input Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!company || !company.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your company name." },
        { status: 400 }
      );
    }

    if (!requirement || !requirement.trim()) {
      return NextResponse.json(
        { success: false, error: "Please select your requirement." },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please write your message or inquiry details." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "info@mechanddie.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure =
      process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom =
      process.env.SMTP_FROM || `"MECH & DIE Website" <no-reply@mechanddie.com>`;

    const emailSubject = `Inquiry: ${requirement} – ${name} (${company})`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #EBEBF0; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #261A66; padding: 16px 20px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">MECH & DIE – New Customer Inquiry</h2>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #5A5A68; font-size: 14px; width: 140px; font-weight: bold;">Name:</td>
            <td style="padding: 8px 0; color: #202027; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5A5A68; font-size: 14px; font-weight: bold;">Company:</td>
            <td style="padding: 8px 0; color: #202027; font-size: 14px;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5A5A68; font-size: 14px; font-weight: bold;">Requirement:</td>
            <td style="padding: 8px 0; color: #261A66; font-size: 14px; font-weight: bold;">${requirement}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5A5A68; font-size: 14px; font-weight: bold;">Selected Product:</td>
            <td style="padding: 8px 0; color: #202027; font-size: 14px;">${product || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5A5A68; font-size: 14px; font-weight: bold;">Submission Date:</td>
            <td style="padding: 8px 0; color: #202027; font-size: 14px;">${new Date().toLocaleString()}</td>
          </tr>
        </table>

        <div style="background-color: #F5F5F7; padding: 16px; border-radius: 6px; margin-top: 16px;">
          <h4 style="margin: 0 0 8px 0; color: #202027; font-size: 14px;">Message / Specifications:</h4>
          <p style="margin: 0; color: #202027; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #9A9AA6; text-align: center;">
          This email was generated automatically by the MECH & DIE website contact portal.
        </p>
      </div>
    `;

    // Check if SMTP is configured
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: recipientEmail,
        replyTo: smtpUser,
        subject: emailSubject,
        html: emailHtml,
        text: `Name: ${name}\nCompany: ${company}\nRequirement: ${requirement}\nProduct: ${product}\nMessage: ${message}`,
      });

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your message has been sent successfully. Our engineering team will contact you shortly.",
        },
        { status: 200 }
      );
    } else {
      // Development or unconfigured SMTP mode: log to server
      console.log("--------------------------------------------------");
      console.log("[INQUIRY LOGGED - SMTP NOT YET CONFIGURED]");
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(`Name: ${name} | Company: ${company}`);
      console.log(`Requirement: ${requirement} | Product: ${product}`);
      console.log(`Message: ${message}`);
      console.log("To send live emails, configure SMTP in .env.local");
      console.log("--------------------------------------------------");

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your inquiry has been received. Our team will get back to you shortly.",
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send your inquiry right now. Please call us directly or message us on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
